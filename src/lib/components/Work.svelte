<script>
	import { onMount } from 'svelte';

	onMount(() => {
		const username = 'kosterm14';
		const apiUrl = `https://api.github.com/users/${username}/repos?sort=updated&per_page=50`;

		fetch(apiUrl)
			.then((response) => response.json())
			.then((repos) => {
				repos.sort((a, b) => b.stargazers_count - a.stargazers_count);

				const container = document.getElementById('repos-container');
				repos.forEach((repo) => {
					const repository = document.createElement('div');
					repository.className = 'repository';
					repository.innerHTML = `
          	<h2>
				<a href="${repo.html_url}" target="_blank">${repo.name}</a>
			</h2>

		  	<p>
				<a href="${repo.homepage}" target="_blank">${repo.homepage || 'no link:('}</a>
			</p>

          	<p>${repo.description || 'No description available.'}</p>

          <section>⭐ ${repo.stargazers_count} | 👁️ ${repo.watchers_count} | 🍴 ${repo.forks_count}</section>
          `;
					container.appendChild(repository);
				});
			})
			.catch((error) => console.error('Error fetching repos:', error));
	});
</script>

<section>
	<h1 id="work">Mijn levenswerk</h1>

	<nav>
		<input
			class="searchbar"
			type="text"
			id="searchInput"
			onkeyup="search()"
			placeholder="Zoek een repo..."
		/>
	</nav>

	<ul id="repos-container"></ul>
</section>

<style>

section {
		font-family: Arial, sans-serif;
		background: #f4f4f9;
		color: #333;
		padding: 1.25rem;
		margin: 0;
	}

	section h1 {
		margin-bottom: 2rem;
	}


</style>