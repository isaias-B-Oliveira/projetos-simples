function escrevendoLetras() {
	function ativarletra(elemento) {
		const arrtexto = elemento.innerHTML.split("");
		elemento.innerHTML = "";
		arrtexto.forEach((letra, i) => {
			setTimeout(() => {
				elemento.innerHTML += letra;
			}, 150 * i);
		});
	}
	const titulo = document.querySelector(".digitando");
	ativarletra(titulo);
}
escrevendoLetras();

function Menumoba() {
	const ativamenu = document.querySelector(".fa-bars");
	const navmenu = document.querySelector("header .navegacao-primaria");

	ativamenu.addEventListener("click", () => {
		ativamenu.classList.toggle("fa-x");
		navmenu.classList.toggle("ativado");
	});
}
Menumoba();

function slideSobremin() {
	const divexperiencia = document.querySelectorAll(".experiencia-content div");
	const liexperiencia = document.querySelectorAll(".experiencia-content ul li");
	const diveducacao = document.querySelectorAll(".educacao-content div");
	const lieducacao = document.querySelectorAll(".educacao-content ul li");

	divexperiencia[0].classList.add("ativo");
	diveducacao[0].classList.add("ativo");
	liexperiencia[0].classList.add("ativo");
	lieducacao[0].classList.add("ativo");

	function slidshow(index) {
		divexperiencia.forEach((div) => {
			div.classList.remove("ativo");
		});
		liexperiencia.forEach((botao) => {
			botao.classList.remove("ativo");
		});
		divexperiencia[index].classList.add("ativo");
		liexperiencia[index].classList.add("ativo");
	}

	function slidshow2(index) {
		diveducacao.forEach((div) => {
			div.classList.remove("ativo");
		});
		lieducacao.forEach((botao) => {
			botao.classList.remove("ativo");
		});
		diveducacao[index].classList.add("ativo");
		lieducacao[index].classList.add("ativo");
	}

	liexperiencia.forEach((event, index) => {
		event.addEventListener("click", () => {
			slidshow(index);
		});
	});

	lieducacao.forEach((event, index) => {
		event.addEventListener("click", () => {
			slidshow2(index);
		});
	});
}
slideSobremin();

function ProjetosPessoais() {
	const listaAll = document.querySelectorAll(".projetos-armazenados ul li");
	const BotaoGeral = document.querySelectorAll(".modelos-projetos ul li");
	const BotaoAll = document.querySelectorAll(".modelos-projetos .all");

	function removeclick(index) {
		BotaoGeral.forEach((iten) => {
			iten.classList.remove("ativo");
		});
		BotaoGeral[index].classList.add("ativo");
	}

	BotaoGeral.forEach((iten, index) => {
		iten.addEventListener("click", () => {
			removeclick(index);
		});
	});

	function showList(Lista, buttom = "all") {
		Lista.forEach((iten) => {
			iten.classList.remove("ativo");
		});
		if (buttom == "desing") {
			Lista[0].classList.add("ativo");
			Lista[1].classList.add("ativo");
			Lista[2].classList.add("ativo");
		}
		if (buttom == "Grafic") {
			Lista[3].classList.add("ativo");
			Lista[4].classList.add("ativo");
		}
		if (buttom == "Websites") {
			Lista[5].classList.add("ativo");
			Lista[6].classList.add("ativo");
			Lista[7].classList.add("ativo");
		}
		if (buttom == "all") {
			Lista[0].classList.add("ativo");
			Lista[1].classList.add("ativo");
			Lista[2].classList.add("ativo");
			Lista[3].classList.add("ativo");
			Lista[4].classList.add("ativo");
			Lista[5].classList.add("ativo");
			Lista[6].classList.add("ativo");
			Lista[7].classList.add("ativo");
		}
	}

	BotaoGeral.forEach((iten) => {
		iten.addEventListener("click", (e) => {
			let currentButtom = e.target;
			if (currentButtom.classList.contains("all")) {
				showList(listaAll);
			}
			if (currentButtom.classList.contains("desing")) {
				showList(listaAll, "desing");
			}
			if (currentButtom.classList.contains("Grafic")) {
				showList(listaAll, "Grafic");
			}
			if (currentButtom.classList.contains("Websites")) {
				showList(listaAll, "Websites");
			}
			// if (currentButtom.classList.contains('all')) {
			// 	showList(listaAll);
			// }
		});
	});
};
ProjetosPessoais();   

