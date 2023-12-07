const timelineBTT1 = gsap.timeline();
const timelineBTT4 = gsap.timeline({ paused: true });
const timelineBTT2 = gsap.timeline();
const timelineBTT3 = gsap.timeline();

const hide = (item) => {
    gsap.set(item, { autoAlpha: 0 });
};

// BTT1 애니메이션을 수행하는 함수
const animateBTT1 = (item, y, x) => {
    gsap.set(item, { y: y, x: x }); // 초기 위치 설정
    timelineBTT1.fromTo(
        item,
        {
            autoAlpha: 1,
            y: y,
        },
        {
            autoAlpha: 1,
            y: 0,
            duration: 1.25,
            overwrite: "auto",
            ease: "power2.in-out",
        }
    ).fromTo(
        item,
        {
            x: x,
        },
        {
            x: 240,
            duration: 1.25,
            overwrite: "auto",
            ease: "power2.in-out",
        }
    ).eventCallback('onComplete', function() {
        timelineBTT4.play();
    });
};

// BTT4 애니메이션을 수행하는 함수
const animateBTT4 = (item, x) => {
    gsap.set(item, { x: -x }); // 초기 위치 설정
    timelineBTT4.fromTo(
        item,
        {
            autoAlpha: 1,
            x: -x,
        },
        {
            autoAlpha: 1,
            x: 0,
            duration: 1.25,
            overwrite: "auto",
            ease: "power2.inOut",
        }
    );
};

// BTT2, BTT3 애니메이션을 수행하는 함수
const animateBTT2 = (item, y) => {
    gsap.set(item, { y: y }); // 초기 위치 설정
    timelineBTT2.fromTo(
        item,
        {
            autoAlpha: 1,
            y: y,
        },
        {
            autoAlpha: 1,
            y: 0,
            duration: 1.25,
            overwrite: "auto",
            ease: "power2.inOut",
        }
    );
};
const animateBTT3 = (item, y) => {
    gsap.set(item, { y: y }); // 초기 위치 설정
    timelineBTT3.fromTo(
        item,
        {
            autoAlpha: 1,
            y: y,
        },
        {
            autoAlpha: 1,
            y: 0,
            duration: 1.25,
            overwrite: "auto",
            ease: "power2.inOut",
        }
    );
};

// ScrollTrigger를 사용하여 스크롤 위치에 따라 애니메이션 실행
gsap.utils.toArray(".reveal").forEach((item) => {
    hide(item);

    if (item.classList.contains("BTT1")) {
        animateBTT1(item, 200, 0);
    } else if (item.classList.contains("BTT4")) {
        animateBTT4(item, 200);
    } else if (item.classList.contains("BTT2")) {
        animateBTT2(item, 200);
    } else if (item.classList.contains("BTT3")) {
        animateBTT3(item, 200);
    }
    ScrollTrigger.create({
        trigger: item,
        start: "top bottom",
        end: "bottom top",
        markers: true,
        onEnter: () => { animate(item) }
    })
});

//  btt 1, 밑에서 위로 왼쪽에서 오른쪽
// 2,3 밑에서 위로
// 4 제 자리에서 나타나기 