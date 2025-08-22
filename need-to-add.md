# Features to Re-add After Reset

This document contains all the features and changes that were added after the working commit `abc5ac0` (August 19th). Each item should be added one at a time and deployed to ensure no single change breaks the Netlify deployment.

**IMPORTANT**: Test deployment after each checked item to identify any problematic changes.

## Blog System Improvements

### Phase 1: Basic Blog Structure
- [ ] **Blog Layout System** - Create new overlapped article layout with correct slugs
  - Add `pages/blog/[slug].vue` for individual blog posts
  - Update blog routing to handle dynamic slugs properly
  - Test with existing blog posts

### Phase 2: Blog Components  
- [ ] **BlogHeader Component** - Create `components/BlogHeader.vue`
  - Hero-style header with gradient background
  - Author info, date, read time display
  - Back to blog navigation
  - Category tags

- [ ] **BlogContent Component** - Create `components/BlogContent.vue`  
  - Article content wrapper with sidebars
  - Table of contents generation
  - Social sharing buttons (Twitter, Facebook, LinkedIn)
  - Author bio section with image
  - Related content suggestions

- [ ] **BlogNavigation Component** - Create `components/BlogNavigation.vue`
  - Breadcrumb navigation
  - Previous/next article links
  - Category navigation

- [ ] **BlogCTA Component** - Create `components/BlogCTA.vue`
  - Call-to-action sections within blog posts
  - Quote request integration
  - Newsletter signup forms

### Phase 3: Blog Pages
- [ ] **Blog Index Page** - Update `pages/blog/index.vue`
  - Featured articles grid
  - Article preview cards with images
  - Pagination for multiple articles
  - Category filtering

- [ ] **Dynamic Blog Pages** - Update `pages/blog/[...slug].vue`
  - Handle both individual posts and category pages
  - SEO optimization for blog posts
  - Dynamic meta tags based on content

### Phase 4: Blog Content
- [ ] **New Blog Article** - Add `content/blog/history-of-nursing-pins.md`
  - Complete article about nursing pins history
  - Includes frontmatter with title, description, image, author, date
  - Proper markdown formatting with headers and sections

## UI/UX Improvements

### Safety and Error Handling
- [ ] **Optional Chaining Updates** - Add null-safe operators throughout components
  - Update `components/BlogContent.vue` with `?.` operators for data safety
  - Update `components/BlogHeader.vue` with `?.` operators for data safety  
  - Add fallback values for missing author images and content

### Navigation Improvements  
- [ ] **Navigation Link Fixes** - Update `components/FullNav.vue`
  - Fix privacy policy link (remove missing slash)
  - Ensure all navigation links are properly formatted
  - Update mobile navigation consistency

### Banner Updates
- [ ] **FloatingBanner Component** - Update `components/FloatingBanner.vue`
  - Change Facebook messenger link to contact page link
  - Update CTA text and styling
  - Ensure responsive design works properly

## New Pages

### Contact System
- [ ] **Contact Page** - Create `pages/contact.vue`
  - Contact form with proper validation
  - Business information display
  - Map integration if needed
  - Form submission handling

### Form Enhancements  
- [ ] **Quote System Updates** - Update `components/QuoteWrapper.vue`
  - Hidden inputs now properly check coin pricing
  - Improved form validation
  - Better error handling for quote calculations

## Configuration Files

### Package Dependencies
- [ ] **Package Lock Updates** - Update `package-lock.json` carefully
  - Only update dependencies that don't affect core Nuxt version
  - Ensure no breaking changes to build system
  - Keep Nuxt at working version (3.10.2 or similar)

### Git Configuration
- [ ] **Gitignore Updates** - Update `.gitignore`
  - Add `.prompts` directory to ignored files
  - Ensure no sensitive files are tracked

## Testing Strategy

For each item above:
1. ✅ **Check the box** when implementing the feature
2. 🚀 **Deploy immediately** to Netlify after each change  
3. ✅ **Verify deployment succeeds** before moving to next item
4. 🔄 **If deployment fails**, revert that specific change and note the issue
5. 📝 **Document any problematic changes** for later investigation

## Deployment Commands

After each change:
```bash
git add .
git commit -m "feat: add [feature name]"
git push origin main
```

Check Netlify deployment status before proceeding to next item.

## Rollback Strategy

If any feature breaks deployment:
```bash
git revert HEAD  # Revert the problematic commit
git push origin main  # Deploy the revert
```

Then investigate the specific issue before attempting to re-add that feature.

## Notes

- **CRITICAL**: Do NOT upgrade Nuxt version - keep at working version
- **CRITICAL**: Do NOT add Nitro netlify preset to `nuxt.config.ts` 
- Start with simpler features first (content, basic components)
- Save complex features (blog system) for last
- Each deployment should be small and isolated

## Current Status

✅ **Reset to working state** - `abc5ac0` (August 19th)  
⏳ **Ready to begin re-adding features** - Start with first unchecked item above