import os
import re

articles_dir = r"c:\Users\Uchenna\Documents\Projects\vantedge\app\lib\articles\mothers-day-gift-articles"

def format_article_content(content):
    """Convert plain text article content to properly formatted HTML"""
    
    # Extract content between backticks
    match = re.search(r'`\s*(.*?)\s*`', content, re.DOTALL)
    if not match:
        return content
    
    inner_content = match.group(1)
    
    # Extract heading
    heading_match = re.search(r'<h2[^>]*>([^<]*)</h2>', inner_content)
    heading = heading_match.group(1) if heading_match else "Article"
    
    # Remove heading from content
    body = re.sub(r'<h2[^>]*>.*?</h2>', '', inner_content, flags=re.DOTALL).strip()
    
    # Initialize formatted content
    formatted = f'export const content = `\n<h2 class="text-2xl font-bold mb-4 mt-8">{heading}</h2>\n\n'
    
    # Split by double newlines or single newlines followed by title pattern
    sections = re.split(r'\n\n+', body)
    
    current_list = []
    
    for section in sections:
        section = section.strip()
        if not section:
            continue
            
        # Check if section contains list items (text followed by colon and description)
        lines = section.split('\n')
        
        if len(lines) > 1 and all(':' in line for line in lines if line.strip()):
            # This looks like a list of items
            if current_list:
                formatted += '<ul class="list-disc list-inside space-y-2 mb-6 text-zinc-700 dark:text-zinc-300">\n'
                for item in current_list:
                    title, desc = item.split(':', 1)
                    desc = desc.strip()
                    formatted += f'<li><strong>{title.strip()}:</strong> {desc}</li>\n'
                formatted += '</ul>\n\n'
                current_list = []
            
            for line in lines:
                if ':' in line:
                    current_list.append(line)
        elif section.count(':') >= 3 and len(lines) == 1:
            # Single paragraph with multiple colons (likely a list item)
            parts = section.split(': ')
            if len(parts) >= 2:
                current_list.append(section)
            else:
                formatted += f'<p class="mb-4 text-zinc-700 dark:text-zinc-300">{section}</p>\n\n'
        else:
            # Regular paragraph
            if current_list:
                formatted += '<ul class="list-disc list-inside space-y-2 mb-6 text-zinc-700 dark:text-zinc-300">\n'
                for item in current_list:
                    if ':' in item:
                        title, desc = item.split(':', 1)
                        formatted += f'<li><strong>{title.strip()}:</strong> {desc.strip()}</li>\n'
                formatted += '</ul>\n\n'
                current_list = []
            
            formatted += f'<p class="mb-4 text-zinc-700 dark:text-zinc-300">{section}</p>\n\n'
    
    # Don't forget remaining list items
    if current_list:
        formatted += '<ul class="list-disc list-inside space-y-2 mb-6 text-zinc-700 dark:text-zinc-300">\n'
        for item in current_list:
            if ':' in item:
                title, desc = item.split(':', 1)
                formatted += f'<li><strong>{title.strip()}:</strong> {desc.strip()}</li>\n'
        formatted += '</ul>\n\n'
    
    formatted += '`;'
    return formatted

# Process all .ts files
for filename in os.listdir(articles_dir):
    if filename.endswith('.ts'):
        filepath = os.path.join(articles_dir, filename)
        try:
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            
            formatted_content = format_article_content(content)
            
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(formatted_content)
            
            print(f"✓ Formatted: {filename}")
        except Exception as e:
            print(f"✗ Error processing {filename}: {e}")

print("\nAll articles formatted successfully!")
