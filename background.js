// background.js

// Listen for messages from popup or content scripts
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'checkFlagged') {
    // TODO: Call backend API to check if site is flagged
    // Example: fetch('https://your-backend/check-site', ...)
    // For now, mock response
    sendResponse({ flagged: false, message: 'Site is not flagged.' });
    return true;
  }
  if (request.action === 'generateEmail') {
    // TODO: Call backend API to generate unique email
    // Example: fetch('https://your-backend/generate-email', ...)
    // For now, mock response
    sendResponse({ email: 'unique123@example.com' });
    return true;
  }
  if (request.action === 'saveEmailUsage') {
    // TODO: Call backend API to save email usage (email, user, site url)
    // For now, just acknowledge
    sendResponse({ success: true });
    return true;
  }
  if (request.action === 'scan-tnc') {
    // TODO: Call backend API to scan terms and conditions
    // For now, mock response
    sendResponse({ result: 'No data selling clauses found.' });
    return true;
  }
}); 