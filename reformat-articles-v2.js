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
    
    // Collect consecutive non-empty lines until we hit blank or another section
    let blockLines = [];
    while (i < lines.length && lines[i].trim() !== '') {
      blockLines.push(lines[i].trim());
      i++;
    }
    
    // Skip blank lines
    while (i < lines.length && lines[i].trim() === '') {
      i++;
    }
    
    if (blockLines.length === 0) continue;
    
    // Check if this block contains list items (lines starting with word and colon)
    const hasListItems = blockLines.some(line => {
      // If it's already a list item, skip
      if (line.startsWith('<li') || line.startsWith('<ul')) return false;
      // Check if line has format: "Item Name: description"
      return /^[A-Za-z][^:]*:/.test(line);
    });
    
    if (hasListItems) {
      // This block has list items - reformat as list
      let listItems = [];
      let beforeListText = [];
      
      for (const blockLine of blockLines) {
        // Skip HTML tags
        if (blockLine.startsWith('<')) {
          continue;
        }
        
        // Check if this is a list item (has colon)
        if (/^[A-Za-z][^:]*:/.test(blockLine)) {
          // Add any accumulated text as paragraph first
          if (beforeListText.length > 0) {
            result.push(`<p class="mb-4 text-zinc-700 dark:text-zinc-300">${beforeListText.join(' ')}</p>`);
            beforeListText = [];
          }
          
          // Format as list item
          const colonIndex = blockLine.indexOf(':');
          const title = blockLine.substring(0, colonIndex).trim();
          const description = blockLine.substring(colonIndex + 1).trim();
          listItems.push(`<li><strong>${title}:</strong> ${description}</li>`);
        } else {
          // Accumulate regular text
          beforeListText.push(blockLine);
        }
      }
      
      // Add any remaining text as paragraph
      if (beforeListText.length > 0) {
        result.push(`<p class="mb-4 text-zinc-700 dark:text-zinc-300">${beforeListText.join(' ')}</p>`);
      }
      
      // Add list
      if (listItems.length > 0) {
        result.push(`<ul class="list-disc list-inside space-y-2 mb-6 text-zinc-700 dark:text-zinc-300">`);
        result.push(...listItems);
        result.push(`</ul>`);
      }
    } else {
      // Regular paragraph block
      const paragraphText = blockLines.join(' ').trim();
      result.push(`<p class="mb-4 text-zinc-700 dark:text-zinc-300">${paragraphText}</p>`);
    }
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
