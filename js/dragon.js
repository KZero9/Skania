function treasure() {
	document.getElementById("yes").onclick = function () { run(true); this.onclick = null; };
	document.getElementById("no").onclick = function () { run(false); this.onclick = null; };
	var st = document.getElementById("st");
	st.value = "드래곤의 둥지에 도착했습니다.\n드래곤은 아직 당신을 눈치채지 못한 듯 합니다.\n도망칠까요?"
	st.style.height = (st.scrollHeight - 5) + "px";
	document.getElementById("img").src = "";
}
function run(b) {
	var st = document.getElementById("st");
	hide();
	if (b) {
		var k = Math.floor(Math.random() * 30 + 1);
		if (k == 1) {
			st = document.getElementById("st");
			st.value = "도망가다 걸렸습니다.\n도망치다 걸린 놈에게는 자비가 없다죠..."
			st.style.height = (st.scrollHeight - 5) + "px";
			document.getElementById("img").src = "img/fail.jpg";
			hp = 0;
			next();
		}
		else {
			st = document.getElementById("st");
			st.value = "무사히 탈주했습니다.\n인생을 마감할 뻔 했네요..."
			st.style.height = (st.scrollHeight - 5) + "px";
			document.getElementById("img").src = "img/run.jpg";
			next();
		}
	}
	else {
		k = Math.floor(Math.random() * 3 + 1);
		if (k!=1) {
			st = document.getElementById("st");
			st.value = "드래곤이 기분이 나쁩니다.\n당신에게 불길이 쏘아집니다...\n150의 데미지를 입었습니다.";
			st.style.height = (st.scrollHeight - 5) + "px";
			document.getElementById("img").src = "img/fire.jpg";
			hp -= 150;
			if (true) {
				setTimeout(hidden, 2000);
			}
			else next();
		}
		else {
			st = document.getElementById("st");
			st.value = "드래곤이 기분이 좋습니다.\n드래곤이 당신에게 선물을 줍니다."
			st.style.height = (st.scrollHeight - 5) + "px";
			document.getElementById("img").src = "img/legend.jpg";
			setTimeout(award, 2000);
		}
	}
}
function award() {
	switch (Math.floor(Math.random() * 3 + 1)) {
		case 1:
			st.value = "정신강화의 반지를 얻었습니다.\n정신력이 피해를 입어도 500으로 복구됩니다.";
			st.style.height = (st.scrollHeight - 5) + "px";
			document.getElementById("img").src = "img/sanring.jpg";
			sanring = true;
			break;
		case 2:
			st.value = "최고급 포션을 받아 먹었습니다.\n체력과 정신력이 400씩 상승합니다.";
			st.style.height = (st.scrollHeight - 5) + "px";
			document.getElementById("img").src = "img/potion.jpg";
			hp += 400; san += 400;
			break;
		case 3:
			st.value = "막대한 자금을 받았습니다.\n2000골드를 획득했습니다.";
			st.style.height = (st.scrollHeight - 5) + "px";
			document.getElementById("img").src = "img/mount.jpg";
			gold += 2000;
			break;
	}
	next();
}
function hidden() {
	st.value = "[Hidden Ivent]\n화가 난 당신은 사기당해 샀던 함정카드를 던졌습니다.\n드래곤이 크나큰 충격을 받아 고혈압으로 쓰러졌습니다.\n당신은 드래곤의 둥지를 털어서 탈주했습니다.\n털어온 아이템으로 체력과 정신력이 700씩, 자금이 2000 상승합니다.";
	st.style.height = (st.scrollHeight - 5) + "px";
	document.getElementById("img").src = "img/hidden.jpg";
	document.getElementById("effect").loop = false;
	document.getElementById("effect").src = "bgm/fake.mp3";
	hp += 700; san += 700; gold += 2000;
	setTimeout(next, 3000);
}