const lfsBasePath = 'https://media.githubusercontent.com/media/PrzygodyReksia/PrzygodyReksia.github.io/refs/heads/main/pliki/reksio';

function graph_link(dopobrania, miniaturka) {
	document.open();
	document.write("<input type='image' onclick=\"clicked_link('" + dopobrania + "');\" src='" + miniaturka + "'>");
}
function graph_link_border(dopobrania, miniaturka) {
	document.open();
	document.write("<a href='#' onclick=\"clicked_link('" + dopobrania + "');\"><img border='2' style='border-color: #FFF9C4;' src='" + miniaturka + "'></a>");
}

function text_link(dopobrania, text) {
	document.open();
	document.write("<a href='#' onclick=\"clicked_link('" + dopobrania + "');\">" + text + "<\a><br>");
}

function clicked_link(dopobrania) {
	NoweOkienko = window.open();
	NoweOkienko.document.open();
	NoweOkienko.document.write("<html><head><title>Pobieranie pliku</title></head><body><center>Kliknij na obrazku aby zapisać go na dysku<br>");
	NoweOkienko.document.write("<a href='" + dopobrania + "' download><img src='" + dopobrania + "' border='0'></a>");
	NoweOkienko.document.write("</body></html>");
}

function file_link(dopobrania, miniaturka) {
	document.write("<a href='" + lfsBasePath + dopobrania + "' download><img src='" + miniaturka + "' border='0'></a>");
}

function anim_link(dopobrania) {
	document.write("<a href='" + dopobrania + "' download><img src='" + dopobrania + "' border='0'></a>");
}

function sound_link(dopobrania, opis) {
	document.write("<a href='" + dopobrania + "' download>" + opis + "</a><br>");
}

function opis_pobierz(opis, dopobrania) {
	document.write(opis + "<a href='../../kretes/galeria/" + dopobrania + "' download>pobierz</a><br>");
}
