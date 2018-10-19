
console.log('repo');

const metaTag = (document.querySelector("meta[name='original_content_git_url']") || document.querySelector("meta[name='original_ref_skeleton_git_url']") as any);
const contentRepoUrl = metaTag.content;

window.open(contentRepoUrl);
