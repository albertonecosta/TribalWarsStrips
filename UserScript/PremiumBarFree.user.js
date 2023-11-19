// ==UserScript==
// @name          Barra Premium Free 1.8.0
// @version      1.8.0
// @description  Barra Premium Free !
// @author       MaxximosDcost && TyrannusRex
// @Utilização     Em qualquer pagina do jogo
// @include        http*://*.die-staemme.de/*
// @include        http*://*.staemme.ch/*
// @include        http*://*.tribalwars.net/*
// @include        http*://*.tribalwars.nl/*
// @include        http*://*.plemiona.pl/*
// @include        http*://*.tribalwars.se/*
// @include        http*://*.tribos.com.pt/*
// @include        http*://*.divokekmeny.cz/*
// @include        http*://*.bujokjeonjaeng.org/*
// @include        http*://*.triburile.ro/*
// @include        http*://*.voyna-plemyon.ru/*
// @include        http*://*.fyletikesmaxes.gr/*
// @include        http*://*.tribalwars.no.com/*
// @include        http*://*.divoke-kmene.sk/*
// @include        http*://*.klanhaboru.hu/*
// @include        http*://*.tribalwars.dk/*
// @include        http*://*.plemena.net/*
// @include        http*://*.tribals.it/*
// @include        http*://*.klanlar.org/*
// @include        http*://*.guerretribale.fr/*
// @include        http*://*.guerrastribales.es/*
// @include        http*://*.tribalwars.fi/*
// @include        http*://*.tribalwars.ae/*
// @include        http*://*.tribalwars.co.uk/*
// @include        http*://*.vojnaplemen.si/*
// @include        http*://*.genciukarai.lt/*
// @include        http*://*.wartribes.co.il/*
// @include        http*://*.plemena.com.hr/*
// @include        http*://*.perangkaum.net/*
// @include        http*://*.tribalwars.jp/*
// @include        http*://*.tribalwars.bg/*
// @include        http*://*.tribalwars.asia/*
// @include        http*://*.tribalwars.us/*
// @include        http*://*.tribalwarsmasters.net/*
// @include        http*://*.tribalwars.com.br/*
// @include        http*://*.tribalwars.com.pt/*
// @icon           https://callymos.com/public/img/favicon.png
// @require   https://code.jquery.com/jquery-2.2.4.min.js
// @downloadURL https://raw.githubusercontent.com/albertonecosta/tribalscripts/master/UserScript/PremiumBarFree.user.js
// @updateURL https://github.com/albertonecosta/tribalscripts/raw/master/UserScript/PremiumBarFree.user.js

// ==/UserScript==


$(".questlog").prepend(`<div class="quest"><img src="https://callymos.com/public/img/favicon.png" width="25" id="opem_bar_maxximos"><div class="quest_new br" style="width: 50px !important;">Bar-MxTy</div></div>`);


var MAXTY =
    `
  <br class="newStyleOnly">
  <table id="quickbar_outer_maxximosdcost" align="center" width="100%" cellspacing="0">
<tbody>
<tr>
	<td>
		<table id="quickbar_inner" style="border-collapse: collapse;" width="100%">
			<tbody><tr class="topborder">
				<td class="left"> </td>
				<td class="main"> </td>
				<td class="right"> </td>
			</tr>
			<tr>
				<td class="left"> </td>
				<td id="quickbar_contents" class="main">
					<ul class="menu quickbar" id="MaxTy">
    <li class="quickbar_item" onclick="window.location ='/game.php?screen=welcome&intro&oscreen=overview_villages';">
            <img src="https://snipboard.io/4RtSKY.jpg">
            <div>Tela Inicial</div>
        </li>
        <li class="quickbar_item" onclick="window.location ='/game.php?screen=map';">
            <img src="https://snipboard.io/JxBmij.jpg">
            <div>Mapa</div>
        </li>
        <li class="quickbar_item" onclick="window.location ='/game.php?screen=overview';">
            <img src="https://snipboard.io/JxBmij.jpg">
            <div>Aldeia</div>
        </li>
       <li class="quickbar_item" onclick="window.location ='/game.php?screen=main';">
            <img src="https://snipboard.io/4RtSKY.jpg">
            <div>Edificio Principal</div>
        </li>
        <li class="quickbar_item" onclick="window.location ='/game.php?screen=train';">
            <img src="https://snipboard.io/oUqVs6.jpg">
            <div>Recrutar</div>
        </li>
        <li class="quickbar_item" onclick="window.location ='/game.php?screen=place';">
            <img src="https://snipboard.io/GHpEjW.jpg">
            <div>Praça de Reunião</div>
            <ul>
                <li class="quickbar_item" onclick="window.location ='/game.php?screen=place&mode=sim';" rowspan="1">
                    <div>
                        <img src="/graphic/big_buildings/place1.png">
                        &nbsp;&nbsp;Simulador
                    </div>
                </li>
                <li class="quickbar_item" onclick="window.location ='/game.php?screen=place&mode=units';" rowspan="1">
                    <div>
                        <img src="/graphic/unit/unit_spear.png">
                       &nbsp;&nbsp;Unidades
                    </div>
                </li>
            </ul>
        </li>
        <li class="quickbar_item" onclick="window.location ='/game.php?screen=market';">
            <img src="https://snipboard.io/2f70rF.jpg">
            <div>Mercado</div>
             <ul>
                <li class="quickbar_item" onclick="window.location ='/game.php?screen=market&mode=exchange';" rowspan="1">
                    <div>
                        <img src="/graphic/res.png">
                        &nbsp;&nbsp;Troca Premium
                    </div>
                </li>
                <li class="quickbar_item" onclick="window.location ='/game.php?screen=market&mode=own_offer';" rowspan="1">
                    <div>
                        <img src="/graphic/res.png">
                        &nbsp;&nbsp;Criar Ofertas
                    </div>
                </li>
               <li class="quickbar_item"onclick="window.location ='/game.php?screen=market&mode=send';" rowspan="1">
                    '<div>
                        '<img src="/graphic/res.png">
                        '&nbsp;&nbsp;Enviar Recursos
                    </div>
                </li>
               <li class="quickbar_item" onclick="window.location ='/game.php?screen=market&mode=transports';" rowspan="1">
                    <div>
                        <img src="/graphic/res.png">
                        &nbsp;&nbsp;Transporte
                    </div>
                </li>
               <li class="quickbar_item" onclick="window.location ='/game.php?screen=market&mode=traders';" rowspan="1">
                    <div>
                        <img src="/graphic/res.png">
                        &nbsp;&nbsp;Estado Comerciante
                    </div>
                </li>
             <li class="quickbar_item" onclick="window.location ='/game.php?screen=market&mode=all_own_offer';" rowspan="1">
                    <div>
                        <img src="/graphic/res.png">
                        &nbsp;&nbsp;Todas Suas Ofertas
                    </div>
                </li>
            </ul>
        </li>
        <li class="quickbar_item" onclick="window.location ='/game.php?screen=smith';">
            <img src="https://snipboard.io/3PZtYU.jpg">
            <div>Ferreiro</div>
        </li>
        <li class="quickbar_item" onclick="window.location ='/game.php?screen=snob';">
            <img src="https://snipboard.io/qYBDNg.jpg">
            <div>Academia</div>
        </li>
    <li class="quickbar_item" onclick="window.location ='/game.php?&screen=church';">
            <img src="graphic/big_buildings/church1.png">
            <div>Igreja</div>
        </li>
         <li class="quickbar_item" href="#">
            <div id="by"> Bara Premiun Free <br>
			by <a class="quickbar_link" data-hash="531033c83a8f03f6e0aeefc105d5f26c" onclick="window.location ='https://github.com/albertonecosta';" data-title="MaxximosDcost">MaxximosDcost</a><br>
			 & <a class="quickbar_link" data-hash="9eb912ebc499d8df40838bcb1e766d82" onclick="window.location ='https://www.youtube.com/@ocriadordetrols5877/playlists';" data-title="TyrannusRex">TyrannusRex</a></div>
        </li>


    	</td>



			<tr>
				<td class="left">Scripts </td>
				<td id="quickbar_contents" class="main">
					<ul class="menu quickbar" id="MaxTy">


    <li class="quickbar_item" onclick="javascript:$.getScript('https://twscripts.dev/scripts/massAttackPlanner.js');">
            <img src="https://snipboard.io/4RtSKY.jpg">
            <div>Planejador OP</div>
            </li>



      <li class="quickbar_item" onclick="snip()">
<script>
function snip() {
 javascript:
script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://dl.dropboxusercontent.com/s/5f0ewzcwkh39pau/TESTE12.js?dl=0';
document.getElementsByTagName("head")[0].appendChild(script);
void( 0 );
}
</script>
            <img src="https://snipboard.io/JxBmij.jpg">
            <div>Snip com aflição</div>
        </li>

  <li class="quickbar_item" onclick="apoioEM()">
<script>
function apoioEM() {
	javascript:
var heavyCav=4;
$.getScript('https://dl.dropboxusercontent.com/s/idwa7mmpn6nxl3l/supportSender.js?dl=0');void 0;
}
</script>
            <img src="https://snipboard.io/JxBmij.jpg">
            <div>Enviar apoios em massa</div>
        </li>


    	</td>
					<td class="right"> </td>
								</tr>
								<tr class="bottomborder">
									<td class="left"> </td>
									<td class="main"> </td>
									<td class="right"> </td>
								</tr>
								<tr>
									<td class="shadow" colspan="3">
										<div class="leftshadow"> </div>
										<div class="rightshadow"> </div>
									</td>
								</tr>
							</tbody>

                            </table>
						</td>
					</tr>
				</tbody>

                </table>
                `;

$('.maincell').prepend(MAXTY);

$('#MaxTy li').css({
    'background-color': '#DDC080',
    'text-align': 'center',
    'margin': '2px',
    'padding': '1px'
});
$('#MaxTy >li').css({
    'width': '75px',
    'height': '50px',
    'display': 'table-cell',
    'vertical-align': 'middle'
});

$('#MaxTy ul').css({
    'margin': '20px',
    'padding': '5px',
    'top': '100px',
    'position': 'absolute',
    'display': 'none',
    'list-style': 'none',
    'background-color': '#962911',
    'z-index': '9'
});
$('#MaxTy ul>li').css({
    'width': '175px',
    'height': '40px',
    'display': 'block',
});

$('#MaxTy div').css({
    'font-family': 'times new roman',
    'font-weight': 'bold',
    'font-size': '12px',
    'color': '#962911'
});


$('#by').css({
    'font-family': 'times new roman',
    'font-weight': 'bold',
    'font-size': '8px',
    'color': '#962911'
});

$('#MaxTy img').css({
    'width': '28px',
    'height': '28px'
});

$('#MaxTy li').hover(function () {
    $(this).css({
        'cursor': 'pointer',
        'border-color': '#DDC080',
        'background-color': '#962911'
    }).find('ul').show();
    $('>div', this).css('color', '#DDC080');
},
    function () {
        $(this).css({
            'cursor': 'default',
            'border-color': '#962911',
            'background-color': '#DDC080'
        }).find('ul').hide();
        $('>div', this).css('color', '#962911');
    });

$("#opem_bar_maxximos").click(function () {
    $("#quickbar_outer_maxximosdcost").toggle(500);
});
