import ProjectData from '@/data/ProjectData.ts'

export default [
    new ProjectData("project-1", "GunCraft", "img/projects/project-1-icon.jpeg", 
    `
    <div class="paragraph">
     <strong>GunCraft</strong> é um jogo em realidade virtual onde o jogador pode criar sua arma e testar ela em desafios de tiro
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/gOg4XvjBlNU?si=GigshiMsQzE_fBUl" frameborder="0" allowfullscreen></iframe>
    </div>
    
    <div class="paragraph center">
     Meu papel neste projeto foi de programador, onde trabalhei com o desenvolvimento de mecânicas de montagem de armas, mecânicas de tiro e mecânicas de deasfios de tiro.
    </div>

    <div class="paragraph center">
     Esse jogo foi um trabalho do curso de graduação em Design de Games da UNIVALI e foi desenvolvido em dupla.
    </div>

    <div class="paragraph center">
        <a href="https://melbi-studios.itch.io/guncraft" target="_blank"><img src="img/projects/itch_io.svg" style="height: 100px; width: auto; alt="itch.io store logo" /></a>
    </div>

    `, "2026","#23bd69", false, false),
    new ProjectData("project-2", "O Herói dos Labirintos", "img/projects/project-2-icon.png", `
    <div class="paragraph">
        <strong>O Herói dos Labirintos</strong> é um jogo financiado pela Financiadora de Estudos e Projetos (FINEP),
        empresa pública federal vinculada ao Ministério da Ciência, Tecnologia e Inovação (MCTI), a partir do projeto Ateliê DUA-GAMES.
        Trata-se de um jogo de aventura e plataforma que combina elementos de parkour, stealth e resolução de enigmas, ambientado em um universo inspirado na mitologia grega.
        <br/>Image by <a target="_blank" href="https://www.pexels.com/fr-fr/@adonyi-gabor-604571">Adonyi Gábor</a>.
    </div>
    <div class="paragraph center">
        <img src="img/projects/heroi_labirinto_screenshot.png" alt="Imagem de gameplay do Herói dos Labirintos" style="max-width: 100%; height: auto;" />
    </div>
    <div class="paragraph center">
        <a href="https://play.google.com/store/apps/details?id=com.univali.oheroidoslabirintos&hl=pt_BR" target="_blank"><img src="img/projects/play-store-logo.png" alt="play store logo" /></a>
    </div>
    <div class="paragraph center">
     Meu papel neste projeto foi programando mecânicas de movimentação do personagem, IA inimiga e armadilhas.
     Este foi o primeiro projeto que trabalhei com mais de um programador e foi feito durante meu estágio no DuaGames.
    </div>

    `,"2025", "#5a78af"),
    new ProjectData("project-3", "Astreaus Protocol", "img/projects/project-3-icon.png", `
    <div class="paragraph">
        <strong>Astreaus Protocol</strong> é um jogo de puzzle com inspiração em Portal e Portal 2, onde o jogador resolve puzzles em um ambiente de ficção científica
        utilizando mecânicas de manipulação de gravidade.
    </div>

    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/LxdNGpOhbCM?si=q59K-vwMQvzVmxem" frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="paragraph">
     Astreaus Protocol foi um trabalho do curso de graduação em Design de Games da UNIVALI e foi desenvolvido em equipes de 4 pessoas,
     onde meu papel foi de programador, trabalhando com mecânicas de manipulação de gravidade, mecânicas de movimentação do personagem e interação com objetos;
    </div>

    <div class="paragraph center">
        <img src="img/projects/Astreaus.gif" alt="Gif de gameplay do Astreaus Protocol" style="max-width: 100%; height: auto;" />
    </div>

    <div class="paragraph center">
        <a href="https://melbi-studios.itch.io/astraeus-protocol" target="_blank"><img src="img/projects/itch_io.svg" style="height: 100px; width: auto; alt="itch.io store logo" /></a>
    </div>
    `,"2025", "#383838", false, true),
    new ProjectData("project-4", "Space in Darkness", "img/projects/project-4-icon.png", `

    <div style="display: flex; gap: 50px; align-items: flex-start;">

    <div style="flex: 1; padding-left: 80px">
        <div class="paragraph">
            <strong>Space in Darkness</strong> é um dos primeiros trabalho universitário que criei com meus colegas,
            é um jogo mobile hipercasual inspirado na luta contra Undyne de Undertale.
        </div>
        <div class="paragraph">
            Ele foi desenvolvido em equipes de 4 pessoas, onde meu papel foi de programador, trabalhando com mecânicas de escudo, geração de inimigos e joystick;
        </div>
    </div>

    <div style="flex: 1;">
        <img src="img/projects/space_in_darkness_gameplay.png" alt="Imagem de gameplay do Space in Darkness" style="max-width: 100%; height: auto;" />
    </div>

    </div>
    <div class="paragraph center">
        <a href="https://am1lton.itch.io/space-in-darkness" target="_blank"><img src="img/projects/itch_io.svg" style="height: 100px; width: auto; alt="itch.io store logo" /></a>
    </div>
    `,"2025", "#383838", true),
];