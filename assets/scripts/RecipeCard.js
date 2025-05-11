// RecipeCard.js

class RecipeCard extends HTMLElement {
	constructor() {
		super();

		// A1. Attach the shadow DOM
		this.shadow = this.attachShadow({ mode: 'open' });

		// A2. Create an <article> element
		const article = document.createElement('article');

		// A3. Create a <style> element
		const style = document.createElement('style');

		// A4. Insert styles (paste from inside <style> tag of cardTemplate.html)
		style.textContent = `
			* {
				font-family: sans-serif;
				margin: 0;
				padding: 0;
			}
		
			a {
				text-decoration: none;
			}
		
			a:hover {
				text-decoration: underline;
			}
		
			article {
				align-items: center;
				border: 1px solid rgb(223, 225, 229);
				border-radius: 8px;
				display: grid;
				grid-template-rows: 118px 56px 14px 18px 15px 36px;
				height: auto;
				row-gap: 5px;
				padding: 0 16px 16px 16px;
				width: 178px;
			}
		
			div.rating {
				align-items: center;
				column-gap: 5px;
				display: flex;
			}
		
			div.rating>img {
				height: auto;
				display: inline-block;
				object-fit: scale-down;
				width: 78px;
			}
		
			article>img {
				border-top-left-radius: 8px;
				border-top-right-radius: 8px;
				height: 118px;
				object-fit: cover;
				margin-left: -16px;
				width: calc(100% + 32px);
			}
		
			p.ingredients {
				height: 32px;
				line-height: 16px;
				padding-top: 4px;
				overflow: hidden;
			}
		
			p.organization {
				color: black !important;
			}
		
			p.title {
				display: -webkit-box;
				font-size: 16px;
				height: 36px;
				line-height: 18px;
				overflow: hidden;
				-webkit-line-clamp: 2;
				-webkit-box-orient: vertical;
			}
		
			p:not(.title),
				span,
				time {
				color: #70757A;
				font-size: 12px;
			}
		`;

		// A5. Append <style> and <article> to the shadow DOM
		this.shadow.appendChild(style);
		this.shadow.appendChild(article);
	}

	set data(data) {
		if (!data) return;

		// A6. Select the <article> from the shadow DOM
		const article = this.shadow.querySelector('article');

		// A7. Set its innerHTML using the template and the data
		article.innerHTML = `
			<img src="${data.imgSrc}" alt="${data.imgAlt}">
			<p><a href="${data.titleLnk}" target="_blank">${data.titleTxt}</a></p>
			<p><strong>${data.organization}</strong></p>
			<p class="rating">Rating: ${'★'.repeat(data.rating)}${'☆'.repeat(5 - data.rating)} (${data.numRatings})</p>
			<p><strong>Time:</strong> ${data.lengthTime}</p>
			<p><strong>Ingredients:</strong> ${data.ingredients}</p>
		`;
	}
}

// A8. Define the custom element
customElements.define('recipe-card', RecipeCard);
