async function fetchFiles() {
	const repo = 'Clermont-ix/Clermont-ix.github.io';
	const path = 'articles/pages';
	const url = `https://api.github.com/repos/${repo}/contents/${path}`;
	
	try {
		const response = await fetch(url);
		const files = await response.json();
		const fileLinksDiv = document.getElementById('fileLinks');
		fileLinksDiv.innerHTML = '';
		
		for (const file of files) {
			if (file.type === 'file' && file.name.endsWith('.html')) {
				const a = document.createElement('a');
				a.href = `https://Clermont-ix.github.io/${path}/${file.name}`;
				const title = await fetchTitle(a.href);
				a.textContent = title || "file.name";
				a.target = '_blank';
				a.style.display = 'block';
				fileLinksDiv.appendChild(a);
			}
		}
	} catch (error) {
		console.error('Get file list error:', error);
	}
}

async function fetchTitle(url) {
	try {
		const response = await fetch(url);
		const text = await response.text();
		const titleMatch = text.match(/<title>(.*?)<\/title>/i);
		return titleMatch ? titleMatch[1] : null;
	} catch (error) {
		console.error('Get title error:', error);
		return null;
	}
}