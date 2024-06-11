<script>
	import { onMount } from "svelte";
	import { writable } from "svelte/store";
  

  
	// GitHub API variables
	const username = "RayanSp";
	const apiUrl = `https://api.github.com/users/${username}/repos?sort=updated&per_page=50`;
  
	// Store for repositories
	let repos = writable([]);
  
	// Function to filter repositories based on specific names
	function filterRepos(repos) {
	  const specificRepos = [
		"vervoerregio-amsterdam",
	  ];
	  return repos.filter((repo) =>
		specificRepos.includes(repo.name.toLowerCase())
	  );
	}
  
	onMount(async () => {
	  // Fetch and set repositories
	  try {
		const response = await fetch(apiUrl);
		let data = await response.json();
		data.sort((a, b) => b.stargazers_count - a.stargazers_count);
		repos.set(filterRepos(data));
	  } catch (error) {
		console.error("Error fetching repos:", error);
	  }
  
	  
	

		

	  
	});
  </script>
 
<article class="work-article">
  <h2>Projects</h2>
   
  <div class="cards">
	{#each $repos as repo}
	 
			<ul>
			  <li>⭐ {repo.stargazers_count}</li>
			  <li>👁️ {repo.watchers_count}</li>
			  <li>🍴 {repo.forks_count} |</li>
			  <li>💻 {repo.language}</li>
			</ul>

			<h3>
			  {repo.name}
			</h3>
  
			<p>
			  {repo.description || "No description available."}
			</p>
			<p>
			  <a href={repo.homepage} target="_blank"> Website </a>
			</p>
  
			<p><a href={repo.html_url} target="_blank"> GitHub</a></p>

	{/each}
  </div>
</article> 
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

.work-article {
	background-color: var(--c-container);
	margin-left: 18rem;
	margin-right: 18rem;
	border-radius: 15px;
	padding: 2rem;
	margin-bottom: 5rem;
}

h2 {
	color: var(--c-white);
}

.cards {
	color: var(--c-white);
}

</style>