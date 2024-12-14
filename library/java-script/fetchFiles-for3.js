async function fetchFiles() {
            const repo = 'Clermont-ix/Clermont-ix.github.io'; // 例如：octocat/Hello-World
            const path = 'articles/pages'; // 文件夹路径
            const url = `https://api.github.com/repos/${repo}/contents/${path}`;
            
            try {
                const response = await fetch(url);
                const files = await response.json();
                const fileLinksDiv = document.getElementById('fileLinks');
                fileLinksDiv.innerHTML = '';

                files.forEach(file => {
                    if (file.type === 'file') {
                        const a = document.createElement('a');
                        a.href = file.download_url;
                        a.textContent = file.name;
                        a.target = '_blank';
                        a.style.display = 'block';
                        fileLinksDiv.appendChild(a);
                    }
                });
            } catch (error) {
                console.error('Reson:', error);
            }
}