function enemy() {
	document.getElementById("yes").onclick = function () { fight(true); this.onclick = null; };
	document.getElementById("no").onclick = function () { fight(false); this.onclick = null; };
	var st = document.getElementById("st");
	st.value = "야생의 몬스터가 튀어나왔다!\n싸울까?"
	st.style.height = (st.scrollHeight - 5) + "px";
	st = document.getElementById("img");
	st.src = "img/e" + Math.floor(Math.random() * 6 + 1) + ".jpg"
}
function fight(b) {
	hide();
	var st = document.getElementById("st");
	if (b) {
		var k = Math.floor(Math.random() * 10);
		if (k == 0) {
			st.value = "적은 빠르게 도망갔다.\n뭐지 이건...";
			st.style.height = (st.scrollHeight - 5) + "px";
		}
		else if (k <= 4) {
			dhp = Math.floor(Math.random() * 30 + 5)
			dsan = Math.floor(Math.random() * 50 + 5);
			dgold = Math.floor(Math.random() * 50 + 100);
			st.value = "싸워서 이겼습니다!\n싸우면서 체력에 " + dhp + "의 피해를 입었습니다.\n승리의 기쁨으로 정신력이 " + dsan + "만큼 상승했습니다.\n죽은 몬스터를 털어서 " + dgold + "골드를 획득하였습니다.";
			st.style.height = (st.scrollHeight - 5) + "px";
			hp -= dhp; san += dsan; gold += dgold;
		}
		else {
			dhp = Math.floor(Math.random() * 100 + 50);
			dsan = Math.floor(Math.random() * 100 + 50);
			st.value = "도저히 이길 수 없었습니다.\n공격을 받아 체력이 " + dhp + "만큼 감소했습니다.\n정신력이 " + dsan + "만큼 감소했습니다.\n돈을 다 잃어버렸습니다.";
			st.style.height = (st.scrollHeight - 5) + "px";
			document.getElementById("img").src = "img/blood.jpg";
			hp -= dhp; san -= dsan; gold = 0;
		}
	}
	else {
		var k = Math.floor(Math.random() * 20 + 1);
		if (k <= 5) {
			st = document.getElementById("st");
			st.value = "도망가다 걸렸습니다.\n강한 충격이 엄습합니다...\n체력과 정신력이 100씩 감소합니다."
			st.style.height = (st.scrollHeight - 5) + "px";
			document.getElementById("img").src = "img/fail.jpg";
			hp -= 100; san -= 100;
		}
		else {
			st.value = "뒤도 안돌아보고 빠르게 달아났다.\n저런 거랑 어떻게 싸워...";
			st.style.height = (st.scrollHeight - 5) + "px";
			document.getElementById("img").src = "img/run.jpg";
		}
	}
	next();
}