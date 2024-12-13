function generateLinks() {
            const input = document.getElementById('fileInput');
            const fileLinksDiv = document.getElementById('fileLinks');
            fileLinksDiv.innerHTML = ''; // 清空之前的链接

            if (input.files.length > 0) {
                const fragment = document.createDocumentFragment();

                Array.from(input.files).forEach(file => {
                    const a = document.createElement('a');
                    a.href = URL.createObjectURL(file);
                    a.textContent = file.name;
                    a.target = '_blank';
                    a.style.display = 'block';
                    fragment.appendChild(a);
                });

                fileLinksDiv.appendChild(fragment);
            } else {
                fileLinksDiv.innerHTML = 'Okay,there is nothing!';
            }
        }