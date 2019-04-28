function money() {
	document.getElementById("yes").onclick = function () { get(true); this.onclick = null; };
	document.getElementById("no").onclick = function () { get(false); this.onclick = null; };
	var st = document.getElementById("st");
	st.value = "돈이 들어있을 것 같은 예감이 듭니다.\n손을 넣어 볼까요?"
	st.style.height = (st.scrollHeight - 5) + "px";
	st = document.getElementById("img");
	var p=Math.floor(Math.random() * 6 + 1);
	st.src = "img/m" +p+ ".jpg"
}
function get(b) {
	hide();
	var st = document.getElementById("st");
	if (b) {
		var k = Math.floor(Math.random() * 10);
		if (k == 0) {
			st.value = "텅텅 비어있다.\n이미 누군가 다 털어간 모양이다...";
			st.style.height = (st.scrollHeight - 5) + "px";
			document.getElementById("effect").loop = false;
			document.getElementById("effect").src = "bgm/fake.mp3";
		}
		else if (k <= 2) {
			dhp = Math.floor(Math.random() * 2 + 5)
			dsan = Math.floor(Math.random() * 3 + 5);
			st.value = "손을 넣자 무언가에 물렸습니다.\n체력에 " + dhp + "의 피해를 입었습니다.\n깜짝 놀라서 정신력이 " + dsan + "만큼 감소했습니다.";
			st.style.height = (st.scrollHeight - 5) + "px";
			var p=Math.floor(Math.random() * 6 + 1);
			st=document.getElementById("img");
			st.src = "img/b" +p+ ".jpg"
			hp -= dhp; san -= dsan;
		}
		else {
			dgold = Math.floor(Math.random() * 20 + 1)
			dsan = Math.floor(Math.random() * 20 + 1);
			st.value = dgold + "골드를 획득했습니다.\n기분이 좋아 정신력이 " + dsan + "만큼 상승하였습니다.";
			st.style.height = (st.scrollHeight - 5) + "px";
			gold += dgold; san += dsan;
		}
	}
	else {
		st.value = "넣지 않았습니다.\n큰 돈이 들어 있었을지도 모릅니다.";
	}
	next();
}