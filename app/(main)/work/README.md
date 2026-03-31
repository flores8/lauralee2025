# Portfolio Structure Guide

## How Your Portfolio Works

Your portfolio has two parts:

1. **Portfolio Landing Page** (`/portfolio`) - Shows all your projects in a grid
2. **Individual Case Studies** (`/portfolio/[slug]`) - Full case study pages

## Adding/Editing Portfolio Projects

### Step 1: Add Project Metadata

Edit `portfolio-data.js` to add or update project metadata that appears on the landing page:

```javascript
{
  slug: 'your-project-slug',
  title: 'Your Project Title',
  thesis: 'A one-sentence description of what you did',
  role: 'Your Role · Company',
}
```

**The slug** becomes the URL: `/portfolio/your-project-slug`

### Step 2: Create the Case Study Content

Create a new file in `[slug]/` named `your-project-slug.js`:

```
app/
  (main)/
    portfolio/
      [slug]/
        platform-console.js      ← Case study content
        your-new-project.js      ← Create new files like this
        page.js                   ← Don't edit this (it's the router)
```

### Step 3: Register the Component

In `[slug]/page.js`, import and register your new case study:

```javascript
// Add import at the top
import YourNewProject from './your-new-project'

// Add to projectComponents object
const projectComponents = {
  'platform-console': PlatformConsole,
  'your-project-slug': YourNewProject,  // Add this line
}
```

## Writing Case Study Content

Your case study file (`platform-console.js`) is a regular React component where you can:

- **Write as much content as you want** (thousands of words are fine)
- **Add images anywhere** throughout your content
- **Structure content** with sections, headings, lists, etc.

### Example Structure

```jsx
export default function YourProject() {
  return (
    <div className="case-study">
      <section className="case-study-section">
        <h2>Section Title</h2>
        <p>Write your content here...</p>
        <p>Multiple paragraphs work great.</p>
      </section>

      <figure className="case-study-image">
        <Image
          src="/portfolio/your-project/image-name.png"
          alt="Image description"
          width={1600}
          height={1000}
          style={{ width: '100%', height: 'auto' }}
        />
        <figcaption>Optional caption</figcaption>
      </figure>

      <section className="case-study-section">
        <h2>Another Section</h2>
        <p>More content...</p>
      </section>
    </div>
  )
}
```

## Adding Images

1. **Upload your images** to AWS S3 in your portfolio bucket

2. **Reference images** in your case study using the full S3 URL:
   ```jsx
   <Image
     src="https://your-bucket.s3.amazonaws.com/portfolio/platform-console/image1.jpg"
     alt="Description for accessibility"
     width={1600}  // Actual image width
     height={1000} // Actual image height
     style={{ width: '100%', height: 'auto' }}
   />
   ```

**Note:** Next.js is already configured to optimize images from S3 (see `next.config.mjs`)

## Available CSS Classes

- `.case-study` - Main wrapper
- `.case-study-section` - Content sections
- `.case-study-image` - Single images
- `.case-study-image-grid` - Two-column image layout

## Your Current Projects

1. ✅ **platform-console** - Ready to edit
2. ⏳ **onboarding-at-scale** - Create `onboarding-at-scale.js`
3. ⏳ **permission-aware-systems** - Create `permission-aware-systems.js`

## Quick Start

To start working on your first project:

1. Open `[slug]/platform-console.js`
2. Replace the placeholder text with your actual content
3. Add your images to `/public/portfolio/platform-console/`
4. Update image paths in the component

That's it! The portfolio will automatically update.
