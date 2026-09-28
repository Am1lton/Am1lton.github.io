<template>
  <div style="margin-bottom: 80px;">
    <h1>Olá!</h1>

	<div class="paragraph">
		<div>
			Eu sou <strong>Arthur Camargo</strong>, estudante de Design de Jogos na Universidade do Vale de Itajaí focado na programação.
			Estagiei na DUA Games onde auxiliei na criação de jogos feitos por e para crianças com deficiência.
		</div>

		<div style="margin-top: 20px;">
			Durante o estágio na DUA Games programei mecânicas em C# na Unity para o jogo Herói do Labirinto, como movimentação do personagem,
			habilidades como o avanço(dash) e IA dos inimigos, além de um shader simple de preenchimento de cor sólida usada na indicação dos seus ataques feito com shadergraph na Unity.
			Gostei muito de trabalhar com este jogo não só pelas mecânicas que programei mas por poder ter visto o uso delas pelas crianças que testaram seus jogos.
		</div>

		<div style="margin-top: 40px;">
			Gosto especialmente de programar e desenvolver mecânicas para jogo.
			Hoje procuro oportunidades de trabalho na programação e/ou desenvolvimento de mecânicas para jogos.
		</div>

		<div style="margin-top: 20px;">Mais sobre meu trabalho está disponível no meu github: <a href="https://github.com/Am1lton" target="_blank" rel="noopener noreferrer">Am1lton</a></div>
	</div>

    <div class="photo">
      <img src="img/avatar.png" alt="Avatar of John" /> 
    </div>

    <div style="clear:both"></div>

  </div>
</template>

<style scoped>
.paragraph {
  max-width: 700px;
  margin-bottom: 20px;
}

.photo {
  margin-top: 50px;
  text-align: center;
}

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 10px;
    padding-left: 80px;
  }
}

</style>