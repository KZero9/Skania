function shop() {
	var st = document.getElementById("st");
	if (gold < 100) {
		document.getElementById("yes").onclick = null;
		document.getElementById("no").onclick = null;
		st.value = "아무리 봐도 수상한 상인을 발견했습니다.\n그는 무언가 수상한 것을 팔려고 합니다.\n하지만 당신의 돈이 부족한 것을 알자 떠났습니다."
		st.style.height = (st.scrollHeight - 5) + "px";
		document.getElementById("img").src = "img/merchant.jpg";
		hide();
		next();
	}
	else if (gold >= 1000) {
		document.getElementById("yes").onclick = function () { buy(true); this.onclick = null; };
		document.getElementById("no").onclick = function () { buy(false); this.onclick = null; };
		st = document.getElementById("st");
		st.value = "아무리 봐도 수상한 상인을 발견했습니다.\n그는 무언가 수상한 것을 팔려고 합니다.\n당신의 많은 돈을 보고 그가 더 비싼것을 팔려고 합니다.\n 가격은 500골드입니다. 사볼까요?"
		st.style.height = (st.scrollHeight - 5) + "px";
		document.getElementById("img").src = "img/merchant.jpg";
	}
	else {
		document.getElementById("yes").onclick = function () { buy(true); this.onclick = null; };
		document.getElementById("no").onclick = function () { buy(false); this.onclick = null; };
		st = document.getElementById("st");
		st.value = "아무리 봐도 수상한 상인을 발견했습니다.\n그는 무언가 수상한 것을 팔려고 합니다.\n가격은 100골드입니다. 사볼까요?"
		st.style.height = (st.scrollHeight - 5) + "px";
		document.getElementById("img").src = "img/merchant.jpg";
	}
}
function buy(b) {
	var st = document.getElementById("st");
	hide();
	if (b) {
		if (gold >= 1000) {
			gold -= 500;
		}
		else gold -= 100;
		switch (Math.floor(Math.random() * 4) + 1) {
			case 1:
				dsan = Math.floor(Math.random() * 100 + 50);
				if (gold >= 1000) dsan *= 5;
				st.value = "설마하던 함정카드!\n크나큰 정신적 충격으로 인해\n정신력에 " + dsan + "의 피해를 입었습니다.";
				st.style.height = (st.scrollHeight - 5) + "px";
				card=true;
				document.getElementById("img").src = "img/trapcard.jpg";
				document.getElementById("effect").loop = false;
				document.getElementById("effect").src = "bgm/fake.mp3";
				san -= dsan; break;
			case 2:
				var d = 20;
				if (gold >= 1000) d *= 5;
				st.value = "다행히 평범한 포션입니다.\n포션을 먹어 체력이 " + d + "만큼 상승하였습니다.\n정신력이 " + d + "만큼 상승하였습니다.";
				st.style.height = (st.scrollHeight - 5) + "px";
				document.getElementById("img").src = "img/sp.jpg";
				hp += d; san += d; break;
			case 3:
				var d = 20;
				if (gold >= 1000) d *= 5;
				st.value = "뭔가 이상한 포션입니다.\n포션을 먹어 체력이 " + d + "만큼  감소하었습니다.\n정신력이 " + d + "만큼 감소하였습니다.";
				st.style.height = (st.scrollHeight - 5) + "px";
				document.getElementById("img").src = "img/pp.jpg";
				hp -= d; san -= d; break;
			case 4:
				var d = 50;
				if (gold >= 1000) d *= 5;
				st.value = "뭔가 좋아 보이는 포션입니다.\n포션을 먹어 체력이 " + d + "만큼 상승하였습니다.\n정신력이 " + d + "만큼 상승하였습니다.";
				st.style.height = (st.scrollHeight - 5) + "px";
				document.getElementById("img").src = "img/hp.jpg";
				hp += d; san += d; break;
		}
	}
	else {
		st.value = "사지 않았습니다.\n어쩌면 좋은 것이었을지도 모릅니다.";
	}
	next();
}