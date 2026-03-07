const fs = require('fs');
const path = require('path');

const articlesDir = 'c:\\Users\\Uchenna\\Documents\\Projects\\vantedge\\app\\lib\\articles\\mothers-day-gift-articles';

const files = [
  '25-thoughful-mothers-day-gifts-she-will-love.ts',
  'affordable-mothers-day-gifts-under-50.ts',
  'best-mothers-day-gift-for-fitness-loging-mums.ts',
  'best-mothers-day-gift-for-grandmas.ts',
  'best-mothers-day-gifts-for-gardening-mums.ts',
  'best-mothers-day-gifts-for-new-moms.ts',
  'best-mothers-day-gifts-for-tech-savvy-mums.ts',
  'best-mothers-day-gifts-in-the-uk-2026.ts',
  'last-minute-mothers-day-gifts-that-still-impresses.ts',
  'tech-gifts-for-mum-on-mothers-day.ts',
  'unique-mothers-day-gift-ideas.ts',
  'wellness-gifts-for-mum-on-mothers-day.ts'
];

function reformatContent(fileContent) {
  // Extract content between backticks
  const contentMatch = fileContent.match(/export const content = `([\s\S]*)`;\s*$/);
  if (!contentMatch) {
    throw new Error('Could not extract content from file');
  }
  
  const rawContent = contentMatch[1];
  const lines = rawContent.split('\n');
  
  let result = [];
  let i = 0;
  let listItems = [];
  
  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();
    
    // Skip empty lines
    if (trimmed === '') {
      i++;
      continue;
    }
    
    // Handle headings - keep as is
    if (trimmed.startsWith('<h2')) {
      result.push(trimmed);
      i++;
      
      // Skip blank lines after heading
      while (i < lines.length && lines[i].trim() === '') {
        i++;
      }
      continue;
    }
    
    // Handle existing ul tags - skip them as we'll rebuild lists
    if (trimmed.startsWith('<ul') || trimmed.startsWith('</ul')) {
      i++;
      continue;
    }
    
    // Handle existing li tags - convert to our format and collect
    if (trimmed.startsWith('<li')) {
      // Extract content from <li>...</li>
      let liContent = trimmed.replace(/<\/?li[^>]*>/g, '').trim();
      
      // Check if it matches <strong>title:</strong> pattern
      const strongMatch = liContent.match(/<strong>([^:]+):<\/strong>\s*(.*)/);
      if (strongMatch) {
        const title = strongMatch[1];
        const description = strongMatch[2];
        listItems.push(`<li><strong>${title}:</strong> ${description}</li>`);
      } else {
        listItems.push(`<li>${liContent}</li>`);
      }
      i++;
      continue;
    }
    
    // Check if this line is a list item candidate (starts with text and has colon)
    if (/^[A-Za-z][^:]*:/.test(trimmed) && !trimmed.startsWith('<')) {
      // Collect any accumulated list items first
      if (listItems.length > 0) {
        result.push(`<ul class="list-disc list-inside space-y-2 mb-6 text-zinc-700 dark:text-zinc-300">`);
        result.push(...listItems);
        result.push(`</ul>`);
        listItems = [];
      }
      
      // Format as list item
      const colonIndex = trimmed.indexOf(':');
      const title = trimmed.substring(0, colonIndex).trim();
      const description = trimmed.substring(colonIndex + 1).trim();
      listItems.push(`<li><strong>${title}:</strong> ${description}</li>`);
      i++;
      continue;
    }
    
    // Regular paragraph text
    if (trimmed.length > 0 && !trimmed.startsWith('<')) {
      // Flush any accumulated list items first
      if (listItems.length > 0) {
        result.push(`<ul class="list-disc list-inside space-y-2 mb-6 text-zinc-700 dark:text-zinc-300">`);
        result.push(...listItems);
        result.push(`</ul>`);
        listItems = [];
      }
      
      result.push(`<p class="mb-4 text-zinc-700 dark:text-zinc-300">${trimmed}</p>`);
      i++;
      continue;
    }
    
    i++;
  }
  
  // Flush any remaining list items
  if (listItems.length > 0) {
    result.push(`<ul class="list-disc list-inside space-y-2 mb-6 text-zinc-700 dark:text-zinc-300">`);
    result.push(...listItems);
    result.push(`</ul>`);
  }
  
  // Rebuild the file with proper wrapper
  const reformatted = `export const content = \`\n${result.join('\n')}\n\`;\n`;
  return reformatted;
}

// Process each file
const successResults = [];
const failResults = [];

files.forEach(file => {
  const filePath = path.join(articlesDir, file);
  
  try {
    if (!fs.existsSync(filePath)) {
      failResults.push(file);
      return;
    }
    
    const content = fs.readFileSync(filePath, 'utf-8');
    const reformatted = reformatContent(content);
    fs.writeFileSync(filePath, reformatted, 'utf-8');
    successResults.push(file);
    console.log(`✓ Reformatted: ${file}`);
  } catch (error) {
    failResults.push(file);
    console.error(`✗ Failed to reformat ${file}: ${error.message}`);
  }
});

console.log('\n========================================');
console.log(`Successfully reformatted: ${successResults.length}/${files.length} files`);
if (successResults.length > 0) {
  console.log('\nSuccessful:');
  successResults.forEach(f => console.log(`  - ${f}`));
}
if (failResults.length > 0) {
  console.log('\nFailed:');
  failResults.forEach(f => console.log(`  - ${f}`));
}
console.log('========================================');
