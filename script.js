const botao = document.getElementById("btn-pronta");
const carta = document.getElementById("primeira-carta");

if (botao && carta) {
    botao.addEventListener("click", function () {
        carta.style.display = "block";
    });

    setTimeout(() => {
        botao.classList.remove("esconder");
        botao.classList.add("mostrar");
    }, 2500);
}

const texto = "bem-vinda, meu amor ❤️";
const titulo = document.getElementById("titulo");

if (titulo) {
    let i = 0;
    titulo.innerHTML = "";

    function escrever() {
        if (i < texto.length) {
            titulo.innerHTML += texto.charAt(i);
            i++;
            setTimeout(escrever, 100);
        }
    }

    escrever();
}

const entrar = document.getElementById("entrar");
const entrada = document.querySelector(".entrada");
const conteudo = document.querySelector(".container");

if (entrar && entrada && conteudo) {
    entrar.addEventListener("click", () => {
        entrada.classList.add("saindo");

        setTimeout(() => {
            entrada.style.display = "none";
            conteudo.classList.remove("escondido");
            conteudo.classList.add("revelar");
        }, 1000);
    });
}

// ENTRE NÓS — abertura do livro
const botaoAbrirLivro = document.getElementById("btn-abrir-livro");
const livroAberto = document.getElementById("livro-aberto");
const capaLivro = document.querySelector(".capa-livro");

if (botaoAbrirLivro && livroAberto && capaLivro) {
    botaoAbrirLivro.addEventListener("click", () => {
        capaLivro.style.display = "none";
        livroAberto.classList.remove("escondido");
    });
}


const botaoAnterior = document.getElementById("btn-anterior");
const botaoProximo = document.getElementById("btn-proximo");
const numeroCapitulo = document.getElementById("numero-capitulo");
const tituloCapitulo = document.getElementById("titulo-capitulo");
const subtituloCapitulo = document.getElementById("subtitulo-capitulo");
const textoEsquerdo = document.getElementById("texto-esquerdo");
const textoDireito = document.getElementById("texto-direito");

const capitulos = [
    

{
    titulo: "Capítulo 1 — O começo de nós dois ❤️",
    subtitulo: "Onde tudo começou",
    esquerda: `Toda história tem um começo, e a nossa foi o início de algo que eu nunca imaginei que se tornaria tão importante para mim.

No começo, eu não sabia tudo o que viveríamos, quantas lembranças criaríamos ou o quanto você se tornaria especial na minha vida. Sabia apenas que, aos poucos, você conquistava um espaço no meu coração que, com o tempo, se tornaria enorme.

Nossa história ganhou seus primeiros momentos, nossas conversas, nossas aproximações e um sentimento que cresceu até nos levar a viver algo que, para mim, significava muito mais do que apenas um relacionamento.

Ao seu lado, comecei a imaginar novos momentos, novas lembranças, novos lugares e um futuro em que poderíamos continuar escolhendo um ao outro.`,
    direita: `Eu não sabia que nosso caminho seria difícil em alguns momentos. Não imaginava que cometeria erros, que teria atitudes das quais me arrependeria ou que um dia sentiria tanta saudade de momentos que desejava que durassem para sempre.

Hoje, quando olho para o começo da nossa história, lembro de como tudo começou e de como você se tornou importante para mim.

Com o tempo, comecei a compreender que amar também significa ter paciência, construir confiança, respeitar e valorizar a outra pessoa.

Não posso voltar ao início e fazer tudo de maneira diferente. Mas posso aprender com o que vivi, amadurecer e levar comigo as lições que nossa história deixou.

Porque, antes da saudade e das perguntas sem resposta, existiu um começo. Existiram sentimentos e a felicidade de duas pessoas que se encontraram em determinado momento de suas vidas.

E aquele começo continua fazendo parte de quem eu sou. `
},

{
    titulo: "Capítulo 2 — Nossas lembranças ❤️",
    subtitulo: "Momentos que ficaram",
    esquerda: `Existem lembranças que o tempo passa, mas que continuam guardadas dentro de mim. Quando recordo nossa história, reencontro pequenos fragmentos de uma época que marcou profundamente minha vida.

Lembro dos nossos abraços, daqueles momentos em que estar perto de você já fazia tudo parecer diferente. Lembro do nosso primeiro beijo, no dia 22 de setembro, uma lembrança que marcou nossa história de maneira especial.

Também me lembro das nossas conversas, das mensagens e das palavras que trocamos. Com o tempo, percebi que muitas das lembranças mais preciosas não precisavam ter sido extraordinárias. Só precisavam ter sido nossas.

Entre minhas recordações, estão as cartas que você escreveu para mim. Cada uma representa um pedacinho do que vivemos. Ao relê-las, consigo recordar sentimentos e momentos que continuam tendo significado.

Guardo também a aliança, a pulseira, a scrunchie, os cartões, os desenhos e até aquela folha em que brincamos de jogo da velha. Para mim, cada objeto carrega uma lembrança. São pequenos pedaços de uma história que fez parte da minha vida.`,
    direita: `Junto dessas recordações, existem os sonhos que imaginei para nós. Pensei nos lugares que poderíamos conhecer, nas fotografias que ainda poderíamos tirar e nos momentos que gostaria de compartilhar ao seu lado.

Imaginei até um dia especial na Arena Corinthians, com uma aliança e um buquê, sonhando em transformar aquele desejo em uma lembrança para guardar.

Nem todos esses sonhos se tornaram realidade. Algumas coisas permaneceram apenas na minha imaginação, enquanto outras tomaram caminhos diferentes daqueles que eu esperava.

Ao olhar para trás, reconheço que também existiram momentos difíceis, discussões e atitudes das quais me arrependo. Não posso mudar o passado, mas posso aprender com ele e amadurecer.

Não quero recordar nós dois apenas com tristeza, nem fingir que não sinto falta. Quero guardar tanto os momentos felizes quanto as lições que permaneceram.

Porque nossas lembranças não são apenas sobre sentir saudade. Também são sobre o que vivi, o que aprendi, o carinho que senti e a pessoa que estou me tornando.

Algumas lembranças permanecem não porque desejo viver preso ao passado, mas porque, um dia, fizeram parte de algo verdadeiro e importante para mim.

E as lembranças de nós dois continuarão ocupando um lugar na história que levarei comigo. `
},


{
    titulo: "Capítulo 3 — Tudo o que aprendi com nós dois ❤️",
    subtitulo: "Crescer também faz parte",
    esquerda: `Depois de tudo o que aconteceu entre nós, percebi que existiam coisas sobre o amor que eu precisava aprender e que, infelizmente, só consegui compreender de verdade depois de perder a oportunidade de viver nosso relacionamento.

Quando olho para a nossa história, não enxergo apenas as lembranças bonitas, os momentos felizes e tudo aquilo que senti por você. Também consigo reconhecer meus erros, minhas atitudes e tudo o que poderia ter feito de outra maneira.

Uma das lições mais importantes foi entender que eu havia confundido o amor com uma garantia. Em algum momento, passei a agir como se amar alguém significasse que essa pessoa necessariamente permaneceria ao meu lado. Eu queria ter certeza de que não perderia você e, muitas vezes, deixava minha insegurança falar mais alto do que a confiança que deveria existir entre nós.

Com o tempo, entendi que amar alguém não significa ter a garantia de que essa pessoa ficará para sempre. Meu amor não me dava o direito de exigir certezas o tempo todo, nem significava que você precisava provar constantemente o que sentia. Você também tinha seus sentimentos, suas dificuldades e sua maneira de lidar com a vida. Eu precisava aprender a respeitar isso sem permitir que meu medo controlasse minhas atitudes.

Também compreendi que o ciúme não é uma prova de amor. Talvez eu tenha confundido meu medo de perder você com a intensidade do que sentia. Eu me preocupava tanto com a possibilidade de algo acontecer que, às vezes, acabava prejudicando justamente aquilo que desejava proteger. Hoje entendo que uma relação saudável precisa de confiança, diálogo e segurança.

Eu me arrependo de muitas atitudes. Das discussões, das palavras que poderiam ter sido diferentes, dos momentos em que não soube lidar com meus sentimentos e das vezes em que poderia ter escutado melhor. Arrependo-me de não ter compreendido certas coisas enquanto ainda estávamos juntos e de ter percebido algumas verdades quando já não podia simplesmente voltar atrás.

Às vezes, desejo poder voltar no tempo. Queria ter a maturidade que estou tentando desenvolver agora, pensar melhor antes de agir e cuidar melhor daquilo que estávamos construindo. Queria ter entendido que não bastava amar intensamente; eu também precisava aprender a demonstrar esse amor de uma maneira saudável.

Mas o passado não pode ser refeito. Posso reconhecer meus erros e desejar que algumas coisas tivessem acontecido de outra forma, mas não posso apagar o que aconteceu. O que posso fazer é aprender com essa experiência e não permitir que os mesmos erros definam meus relacionamentos no futuro.

Outra lição importante foi compreender que amar alguém também significa respeitar seus sentimentos, suas escolhas e seu espaço. Eu tinha tanto medo de perder você que, às vezes, pensava mais em como impedir que você fosse embora do que em compreender o que precisava. Hoje entendo que não posso decidir por você, controlar o que sente ou exigir que continue ao meu lado apenas porque ainda desejo estar com você.`,
    direita: `Foi doloroso compreender tudo isso enquanto meus sentimentos ainda existiam, mas estou aprendendo que meu amor não pode se transformar em uma obrigação para você. Posso desejar que nossa história tivesse continuado, sentir saudade e imaginar como as coisas poderiam ter sido diferentes. Ainda assim, preciso respeitar a realidade e suas escolhas.

Aprendi também que pedir desculpas não desfaz automaticamente a dor que alguém sentiu. Reconhecer meus erros é importante, mas isso não significa que você seja obrigada a me perdoar, confiar em mim novamente ou me oferecer uma nova oportunidade. Se realmente desejo amadurecer, preciso assumir a responsabilidade pelas minhas atitudes sem esperar uma recompensa em troca.

Mudar não é apenas dizer que farei diferente. É aprender a controlar minhas reações, conversar em vez de discutir, ouvir sem transformar tudo em uma ameaça e respeitar os limites da outra pessoa. É continuar aprendendo mesmo quando ninguém está olhando e mesmo sem a garantia de que alguém perceberá minha mudança.

Também compreendi que não posso colocar toda a minha felicidade nas mãos de uma única pessoa. Você se tornou muito importante para mim, mas minha vida continua tendo outros caminhos. Ainda tenho sonhos para realizar, conhecimentos para adquirir e uma pessoa que preciso construir. A dor do término não deve me fazer esquecer de mim mesmo ou acreditar que meus erros são tudo o que existe em mim.

Isso não significa que o que senti por você tenha sido pouco. Significa que estou tentando aprender a amar sem me perder completamente no medo de perder alguém.

Talvez uma das lições mais difíceis seja aceitar que não posso mudar o passado para conseguir uma segunda chance. Não posso obrigar você a enxergar minhas mudanças nem fazer com que volte a sentir o que sentia antes. Posso apenas reconhecer o que aconteceu, respeitar suas escolhas e continuar amadurecendo.

Uma parte de mim ainda imagina como seria construir algo diferente, com mais confiança, maturidade, diálogo e tranquilidade. Porém, agora entendo que um recomeço não depende apenas da minha vontade. Nós dois precisaríamos desejar isso livremente, porque nenhum sentimento, por mais sincero que seja, pode substituir a vontade mútua.

Também aprendi que não preciso transformar meu arrependimento em uma condenação eterna. Posso reconhecer que errei sem passar o resto da vida acreditando que sou incapaz de amar de maneira saudável. Posso olhar para quem fui, compreender melhor minhas atitudes e trabalhar para me tornar alguém mais consciente.

Não quero usar o passado como desculpa para meus erros, mas também não quero passar a vida inteira sendo definido por eles. Quero aprender a ser mais paciente, compreensivo, responsável pelos meus sentimentos e cuidadoso com o coração de quem estiver ao meu lado.

Acima de tudo, compreendi que amar alguém não significa garantir que essa pessoa nunca vá embora. Significa valorizar o tempo compartilhado, respeitar sua liberdade e entender que uma relação precisa ser escolhida pelos dois.

Eu gostaria de ter aprendido tudo isso enquanto ainda estávamos juntos. Gostaria que você tivesse conhecido mais cedo a versão de mim que agora tenta compreender os próprios erros. Mas não posso escolher quando essas lições chegam. Só posso decidir o que farei com elas daqui em diante.

Não sei o que o futuro reserva para nós. Talvez um dia nossos caminhos voltem a se cruzar; talvez continuemos separados. Já não posso viver esperando que o futuro conserte o passado.

Se algum dia existir a possibilidade de construirmos algo novamente, desejo que seja porque nós dois queremos, porque existe confiança e porque conseguimos enxergar um ao outro de maneira diferente. Não porque eu tenha insistido o suficiente ou porque você se sinta obrigada a me oferecer outra oportunidade.

E, se essa oportunidade nunca chegar, essas lições ainda terão valor. Posso guardar o que foi bonito, assumir meus erros e continuar amadurecendo.

Porque, no fim, não quero apenas dizer que me arrependo. Quero aprender com aquilo de que me arrependo.

Não posso voltar ao começo da nossa história, mas posso mudar a maneira como escreverei as próximas páginas da minha vida.

Eu amei, cometi erros, perdi algo importante e precisei encarar verdades que gostaria de ter compreendido antes. Mas ainda posso aprender, amadurecer e me tornar alguém melhor.

Essa é uma das maiores lições que levarei da nossa história: o amor não é uma garantia de que alguém ficará, e o arrependimento não pode mudar o passado. Ainda assim, ambos podem me ensinar a agir de maneira diferente no futuro.

Independentemente de como nossa história termine, tudo o que aprendi continuará tendo significado não apenas para quem eu era quando conheci você, mas também para quem ainda estou me tornando. ❤️`
},

{
    titulo: "Capítulo 4 — O que ficou ❤️",
    subtitulo: "As lembranças, a saudade e tudo o que aprendi",
    esquerda: `Depois de tudo o que vivemos, de todas as lembranças que construímos e de tudo o que aconteceu entre nós, às vezes me pego pensando no que realmente ficou.

Ficaram as lembranças dos nossos momentos, as conversas que tivemos, os abraços, o nosso primeiro beijo e todas aquelas pequenas coisas que, enquanto aconteciam, talvez eu não imaginasse que um dia fariam tanta falta. Ficaram as cartas que você escreveu, os presentes que trocamos e os detalhes que guardo porque me fazem lembrar de uma parte da minha vida em que você esteve ao meu lado.

Mas não ficaram apenas os objetos ou as lembranças. Ficaram também os sentimentos que vivi, as coisas que aprendi e as partes de mim que precisei conhecer depois que tudo mudou.

Ficou a saudade. Uma saudade que aparece nos momentos mais inesperados, quando encontro alguma coisa que me lembra você ou quando me recordo de um instante que gostaria de poder viver novamente. Às vezes, essa saudade vem acompanhada de um sorriso, porque lembro de algo que me fez feliz. Em outras ocasiões, ela vem acompanhada de lágrimas, porque percebo que sentir falta de alguém não significa poder voltar a viver tudo aquilo.

Ficou o arrependimento pelas vezes em que não soube agir da maneira certa. Pelas discussões que poderiam ter sido diferentes, pelas minhas inseguranças, pelo ciúme e pelas situações em que deixei meus medos influenciarem minhas atitudes. Ficou a consciência de que eu poderia ter cuidado melhor de algumas coisas e de que nem sempre compreendi o que precisava compreender enquanto ainda estávamos juntos.

Por muito tempo, pensei em como seria se pudesse voltar atrás. Imaginei quantas coisas faria de maneira diferente, quantas palavras escolheria melhor e quantas situações tentaria resolver com mais calma. Mas, por mais que eu deseje ter tido essa maturidade antes, sei que não posso reescrever o que aconteceu.

O que posso fazer é aprender.

E foi assim que percebi que, mesmo quando uma história não continua da maneira que imaginamos, ela ainda pode nos ensinar alguma coisa. Aprendi que amar alguém não significa ter a garantia de que essa pessoa ficará. Aprendi que o medo de perder pode acabar prejudicando aquilo que tentamos proteger e que o amor precisa de confiança, respeito, diálogo e liberdade para existir de maneira saudável.

Aprendi também que pedir desculpas não apaga tudo e que mudar não significa receber automaticamente uma segunda oportunidade. Posso reconhecer meus erros, desejar ter feito diferente e trabalhar para amadurecer, mas não posso decidir como outra pessoa vai se sentir diante disso.`,
    direita: `Essa talvez seja uma das partes mais difíceis de aceitar: perceber que existem coisas que dependem de mim e outras que não estão nas minhas mãos.

Eu posso mudar minhas atitudes, mas não posso mudar o passado. Posso continuar sentindo carinho, mas não posso exigir que você sinta o mesmo. Posso desejar que nossa história tivesse outro caminho, mas não posso construir sozinho um futuro que precisaria ser escolhido por nós dois.

E, mesmo sabendo disso, ainda existem coisas que ficaram em mim e que não consigo simplesmente ignorar.

Ficou o carinho por você. Ficou a importância que teve na minha vida. Ficou a lembrança de como eu imaginava o nosso futuro e de quantas coisas gostaria de ter vivido ao seu lado. Ficou aquela vontade de que, se um dia nossos caminhos se encontrassem novamente de uma maneira diferente, pudéssemos conversar com mais maturidade e compreender aquilo que antes não conseguimos.

Não sei se esse dia chegará. Não sei se algum dia teremos a oportunidade de construir uma nova história ou se precisarei aprender a guardar tudo isso apenas como parte do passado. Seria fácil escrever que tenho certeza de como tudo terminará, mas a verdade é que não tenho essa resposta.

O que sei é que não quero transformar as lembranças que tenho de você em algo que me impeça de continuar vivendo. Quero aprender a sentir saudade sem precisar correr atrás do passado, a reconhecer meus erros sem me odiar por eles e a guardar o que foi importante sem esquecer de cuidar de mim.

Porque eu também fiquei.

Ficou a pessoa que viveu tudo isso, que amou, que errou, que chorou, que se arrependeu e que agora está tentando compreender melhor os próprios sentimentos. Ficou alguém que ainda tem muito a aprender, mas que já consegue enxergar coisas que antes não enxergava.

Talvez eu nunca consiga explicar completamente o significado que você teve para mim. Talvez algumas lembranças continuem despertando sentimentos mesmo depois de muito tempo. E talvez existam perguntas sobre nós que nunca recebam as respostas que eu gostaria de ter.

Mas não quero que o que ficou seja apenas dor.

Quero que fiquem também as lições, a capacidade de reconhecer meus erros, a vontade de amadurecer e a compreensão de que posso amar alguém sem deixar de respeitar suas escolhas. Quero lembrar que, apesar de tudo o que não aconteceu como eu esperava, ainda posso construir coisas boas na minha vida.

Eu não preciso fingir que você não foi importante para conseguir seguir em frente com os meus dias. Também não preciso prometer que nunca mais sentirei saudade. Só preciso aprender, pouco a pouco, a não deixar que essa saudade decida tudo por mim.

E, se um dia existir uma nova oportunidade entre nós, espero que ela não seja construída apenas sobre a falta que sentimos um do outro, mas também sobre a vontade de fazer diferente, a confiança e o respeito mútuo.

Se essa oportunidade não existir, ainda assim quero que tudo o que aprendi continue fazendo parte de mim.

Porque, no fim, nem tudo o que termina desaparece. Algumas coisas permanecem nas lembranças, outras se transformam em aprendizado, e algumas deixam marcas que, com o tempo, aprendemos a carregar de uma maneira mais leve.

O que ficou foi a nossa história, o que senti por você, os erros que reconheci, as lições que aprendi e a pessoa que estou tentando me tornar.

Ficou a saudade, mas também a possibilidade de amadurecer. Ficou o arrependimento, mas também a oportunidade de agir diferente. Ficou o carinho, mesmo que hoje a nossa realidade seja outra.

E, acima de tudo, ficou a certeza de que aquilo que vivi teve significado para mim.

Não sei o que o futuro ainda reserva, mas sei que não preciso apagar o que passou para continuar vivendo. Posso guardar nossas lembranças com carinho, aceitar o que não consigo mudar e seguir construindo minha vida, levando comigo tudo aquilo que essa história me ensinou.

Porque, depois de tudo, quando penso em nós dois e me pergunto o que ficou, a resposta é muito maior do que a saudade de alguém que já não está ao meu lado.

Ficou uma parte da minha história. Ficou tudo o que aprendi. E ficou alguém que, apesar de tudo, ainda está aprendendo a crescer. ❤️`
},

{
    titulo: "Capítulo 5 — Um novo capítulo ❤️",
    subtitulo: "O futuro que ainda vou construir",
    esquerda: `Se cheguei até aqui, é porque muita coisa aconteceu pelo caminho. Vivi momentos que gostaria de guardar para sempre, enfrentei situações que nunca imaginei que seriam tão difíceis e aprendi coisas sobre mim que talvez demorasse muito mais tempo para compreender se tudo tivesse acontecido de outra maneira.

Hoje, quando olho para trás, consigo perceber que não sou exatamente a mesma pessoa que era no começo dessa história. Muita coisa mudou, dentro e fora de mim. Algumas mudanças aconteceram aos poucos, outras vieram acompanhadas de dor, arrependimento e saudade. Mas todas fazem parte do caminho que percorri até aqui.

Durante muito tempo, imaginei como seria o meu futuro. Criei sonhos, fiz planos e pensei em todas as coisas que ainda gostaria de viver. Entre esses sonhos, existia a vontade de continuar construindo uma história ao lado de alguém que se tornou muito importante para mim. Eu imaginava novos momentos, novas lembranças e um futuro em que poderíamos continuar crescendo juntos.

Mas nem tudo aconteceu como eu esperava.

Precisei aprender a lidar com a ausência, com as lembranças e com a sensação de que algumas coisas poderiam ter sido diferentes. Precisei olhar para minhas próprias atitudes e reconhecer erros que, enquanto tudo acontecia, nem sempre consegui enxergar com clareza.

Foi difícil perceber que, em alguns momentos, deixei minhas inseguranças falarem mais alto do que a confiança. Que o medo de perder alguém acabou influenciando a maneira como eu agia. Que, mesmo amando de verdade, eu ainda tinha muito a aprender sobre como demonstrar esse amor de uma maneira saudável.

Eu gostaria de ter entendido algumas coisas antes. Gostaria de ter tido mais maturidade em determinadas situações, de ter escolhido melhor minhas palavras e de ter aprendido a lidar com meus sentimentos sem permitir que eles machucassem alguém importante para mim.

Mas não posso voltar ao passado.

Posso apenas reconhecer o que aconteceu, aceitar a responsabilidade pelas minhas atitudes e decidir o que quero fazer com tudo o que aprendi. Não quero fingir que nunca errei, nem passar o resto da vida me definindo pelos meus erros. Quero aprender com eles, amadurecer e me tornar alguém capaz de agir de maneira diferente.

Também estou aprendendo que nem tudo depende da minha vontade. Existem pessoas que amo, sonhos que desejo realizar e situações que gostaria de mudar, mas não posso controlar todas as respostas que a vida me dará. Posso fazer a minha parte, escolher minhas atitudes e continuar tentando, mas preciso aceitar que algumas coisas não estão inteiramente nas minhas mãos.

Essa é uma das lições mais difíceis que venho aprendendo: nem sempre querer muito alguma coisa significa que ela acontecerá da maneira que imaginamos.

Ainda existem sentimentos que carrego comigo. Existem lembranças que me fazem sorrir e outras que ainda despertam saudade. Existem dias em que me sinto mais tranquilo e outros em que tudo parece voltar de uma vez. Estou aprendendo que amadurecer não significa deixar de sentir, mas encontrar maneiras de lidar com aquilo que sinto sem permitir que isso determine todos os meus passos.

Não preciso fingir que o passado não foi importante para conseguir construir o futuro. Não preciso apagar as lembranças para continuar vivendo. E não preciso ter todas as respostas agora para dar o próximo passo.`,
    direita: `Preciso apenas entender que a minha história não termina em uma fase difícil.

Ainda sou jovem, ainda tenho muito para aprender e existem muitas versões de mim que ainda não conheci. Tenho estudos para concluir, conhecimentos que quero adquirir, projetos que desejo construir e sonhos que quero transformar em realidade. Quero evoluir na programação, desenvolver minhas habilidades, conquistar minhas oportunidades e, aos poucos, construir a independência que imagino para o meu futuro.

Quero olhar para os meus projetos e lembrar que cada um deles representa algo que estou tentando construir. Quero aprender coisas novas, cometer erros durante o processo e ter paciência para melhorar. Quero deixar de esperar que tudo esteja perfeito para começar e entender que o progresso acontece quando continuo tentando, mesmo nos dias em que a motivação não aparece.

Também quero cuidar melhor de mim. Quero aprender a respeitar meus próprios limites, organizar meus dias, cuidar da minha saúde e não deixar que os momentos difíceis me façam esquecer de tudo o que ainda existe para viver. Quero me aproximar cada vez mais de Deus, fortalecer minha fé e aprender a confiar mesmo quando não consigo compreender o caminho que está diante de mim.

A fé me lembra que não preciso conhecer todas as respostas para continuar caminhando. Posso orar pelos meus sonhos, entregar minhas preocupações a Deus e buscar sabedoria para lidar com aquilo que não consigo controlar. Posso desejar que as coisas aconteçam de determinada maneira sem esquecer que também preciso aprender a aceitar o que não depende de mim.

Não sei exatamente onde estarei daqui a alguns anos. Não sei quais sonhos se realizarão, quais pessoas continuarão ao meu lado ou quais caminhos ainda precisarei percorrer. Mas quero chegar ao futuro sabendo que não abandonei a mim mesmo durante as dificuldades.

Quero me tornar alguém de quem eu possa me orgulhar. Não alguém perfeito, que nunca erra ou nunca sente medo, mas alguém que reconhece os próprios erros, aprende com eles e continua crescendo.

E, quando penso em tudo o que vivi até hoje, percebo que este novo capítulo não precisa significar esquecer o que veio antes. Ele pode começar justamente quando decido compreender meu passado sem permanecer preso a ele.

O capítulo anterior faz parte de mim. As pessoas que conheci, os momentos que vivi, as escolhas que fiz e os erros que cometi contribuíram para a pessoa que sou hoje. Não posso mudar as páginas que já foram escritas, mas posso participar daquilo que ainda está por vir.

Talvez eu ainda sinta saudade de algumas coisas. Talvez existam dias em que eu deseje que certas situações tivessem terminado de outra maneira. Talvez eu ainda precise de tempo para compreender tudo o que aconteceu.

E tudo bem.

Não preciso resolver a vida inteira de uma vez. Não preciso me tornar a pessoa que desejo ser de um dia para o outro. Posso começar com pequenas atitudes, aprender um pouco mais a cada dia e continuar caminhando mesmo quando o progresso parecer lento.

O importante é não transformar os meus arrependimentos em uma prisão, nem permitir que o medo do futuro me impeça de viver o presente.

Hoje, começo este novo capítulo sem saber exatamente como será o final. Não tenho todas as respostas, não tenho todos os planos definidos e ainda estou descobrindo muita coisa sobre mim mesmo.

Mas tenho a oportunidade de continuar.

Continuar aprendendo. Continuar amadurecendo. Continuar construindo meus sonhos. Continuar fortalecendo minha fé. Continuar me tornando alguém que sabe amar sem controlar, sentir sem se perder e desejar algo sem esquecer de cuidar de si mesmo.

Não sei se tudo acontecerá como imagino, mas quero fazer a minha parte para que o futuro encontre alguém que não desistiu de crescer.

Porque a minha história é maior do que os meus erros, maior do que os momentos difíceis e maior do que qualquer resposta que ainda esteja esperando.

Este é um novo capítulo. Não porque tudo o que passou deixou de importar, mas porque eu finalmente estou aprendendo que também preciso dar continuidade à minha própria história.

E, desta vez, quero escrever as próximas páginas com mais maturidade, paciência, fé e coragem.

Ainda tenho muito para viver. Ainda tenho muito para aprender. Ainda tenho sonhos para realizar e uma pessoa inteira para me tornar.

O passado continuará fazendo parte de mim, mas não precisa decidir tudo o que serei.

Hoje, sigo em frente não porque já superei tudo, nem porque deixei de sentir, mas porque compreendi que ainda existe um futuro esperando para ser construído.

O próximo capítulo começa aqui. E a história que ainda vou escrever também depende das escolhas que faço a partir de agora. ❤️`
}

];

let capituloAtual = 0;

function mostrarCapitulo() {
    const capitulo = capitulos[capituloAtual];

    tituloCapitulo.textContent = capitulo.titulo;
    subtituloCapitulo.textContent = capitulo.subtitulo;
    textoEsquerdo.textContent = capitulo.esquerda;
    textoDireito.textContent = capitulo.direita;

    numeroCapitulo.textContent =
        `${capituloAtual + 1} / ${capitulos.length}`;

    botaoAnterior.disabled = capituloAtual === 0;
    botaoProximo.disabled =
        capituloAtual === capitulos.length - 1;
}

if (
    botaoAnterior &&
    botaoProximo &&
    numeroCapitulo &&
    tituloCapitulo &&
    subtituloCapitulo &&
    textoEsquerdo &&
    textoDireito
) {
    botaoAnterior.addEventListener("click", () => {
        if (capituloAtual > 0) {
            capituloAtual--;
            mostrarCapitulo();
        }
    });

    botaoProximo.addEventListener("click", () => {
        if (capituloAtual < capitulos.length - 1) {
            capituloAtual++;
            mostrarCapitulo();
        }
    });

    mostrarCapitulo();
}


/* ENTRE NÓS — MENU DE CAPÍTULOS */

const menuCapitulos = document.getElementById("menu-capitulos");
const capaCapitulo = document.getElementById("capa-capitulo");
const tituloCapa = document.getElementById("titulo-capa");
const descricaoCapa = document.getElementById("descricao-capa");
const botaoVoltarCapitulos = document.getElementById("btn-voltar-capitulos");
const botaoVoltarCapa = document.getElementById("btn-voltar-capa");

const cartoesCapitulos = document.querySelectorAll(".cartao-capitulo");

if (menuCapitulos && capaCapitulo) {
    cartoesCapitulos.forEach((cartao) => {
        cartao.addEventListener("click", () => {
            capituloAtual = Number(cartao.dataset.capitulo);
            mostrarCapitulo();

            tituloCapa.textContent =
                capitulos[capituloAtual].titulo.split(" — ").slice(1).join(" — ");

            descricaoCapa.textContent =
                capitulos[capituloAtual].subtitulo;

            menuCapitulos.classList.add("escondido");
            capaCapitulo.classList.remove("escondido");
            livroAberto.classList.add("escondido");
        });
    });

    if (botaoVoltarCapitulos) {
        botaoVoltarCapitulos.addEventListener("click", () => {
            capaCapitulo.classList.add("escondido");
            menuCapitulos.classList.remove("escondido");
        });
    }

    if (botaoVoltarCapa) {
        botaoVoltarCapa.addEventListener("click", () => {
            livroAberto.classList.add("escondido");
            capaCapitulo.classList.remove("escondido");
        });
    }
}
