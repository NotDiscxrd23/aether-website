document.addEventListener('DOMContentLoaded', () => {
    // Tab Switching Logic
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons and contents
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            // Add active class to clicked button and corresponding content
            btn.classList.add('active');
            const targetTab = btn.getAttribute('data-tab');
            document.getElementById(targetTab).classList.add('active');
        });
    });

    // Copy Script Logic
    const copyBtn = document.getElementById('copyBtn');
    const scriptDisplay = document.getElementById('scriptDisplay');
    const rawScript = document.getElementById('lua-script').textContent;

    // Populate the display block initially
    scriptDisplay.textContent = rawScript;

    copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(rawScript).then(() => {
            const originalText = copyBtn.textContent;
            copyBtn.textContent = 'Copied!';
            copyBtn.classList.add('copied');
            
            setTimeout(() => {
                copyBtn.textContent = originalText;
                copyBtn.classList.remove('copied');
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy script: ', err);
            copyBtn.textContent = 'Failed';
            setTimeout(() => {
                copyBtn.textContent = 'Copy Script';
            }, 2000);
        });
    });
});