function food() {
	document.getElementById("yes").onclick = function () { eat(true); this.onclick = null; };
	document.getElementById("no").onclick = function () { eat(false); this.onclick = null; };
	var st = document.getElementById("st");
	st.value = "수상한 음식을 발견했습니다!\n먹어 볼까요?"
	st.style.height = (st.scrollHeight - 5) + "px";
	st = document.getElementById("img");
	var p=Math.floor(Math.random() * 6 + 1);
	st.src = "img/f" +p+ ".jpg"
}

function eat(b) {
	hide();
	var st = document.getElementById("st");
	if (b) {
		var k = Math.floor(Math.random() * 3);
		if (k == 0) {
			dhp = Math.floor(Math.random() * 30 + 10)
			dsan = Math.floor(Math.random() * 20 + 10);
			st.value = "안타깝게도 상한 음식이었습니다 ㅠㅠ\n식중독으로 체력에 " + dhp + "의 피해를 입었습니다.\n정신적 충격으로 정신력에 " + dsan + "의 피해를 입었습니다.";
			document.getElementById("effect").loop = false;
			document.getElementById("effect").src = "bgm/fake.mp3";
			st.style.height = (st.scrollHeight - 5) + "px";
			hp -= dhp; san -= dsan;
		}
		else {
			dhp = Math.floor(Math.random() * 30 + 5)
			dsan = Math.floor(Math.random() * 20 + 5);
			st.value = "다행히 멀쩡한 음식이었습니다!\n음식을 먹어 체력이 " + dhp + "만큼 상승하였습니다.\n포만감으로 정신력이 " + dsan + "만큼 상승하였습니다.";
			st.style.height = (st.scrollHeight - 5) + "px";
			hp += dhp; san += dsan;
		}
	}
	else {
		st.value = "먹지 않았습니다!\n이 선택이 옳았을지 아닌지는 모릅니다.";
		st.style.height = (st.scrollHeight - 5) + "px";
	}
	next();
}