// 요소를 숨기기 위한 함수
const hide = (item) => {
    gsap.set(item, { autoAlpha: 0 });
};

// 각 애니메이션에 대한 timeline 생성
const timelineBTT1 = gsap.timeline();
const timelineBTT4 = gsap.timeline({ paused: true });

// 애니메이션을 수행하는 함수
const animateBTT1 = (item, y, x) => {
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
    );
    timelineBTT1.fromTo(
        item,
        {
            autoAlpha: 1,
            x: x,
        },
        {
            autoAlpha: 1,
            x: 0,
            duration: 1.25,
            overwrite: "auto",
            ease: "power2.in-out",
        }
    );
};

// ScrollTrigger를 사용하여 스크롤 위치에 따라 애니메이션 실행
gsap.utils.toArray(".reveal").forEach((item) => {
    hide(item);

    if (item.classList.contains("BTT1")) {
        animateBTT1(item, 200, -150);
        ScrollTrigger.create({
            trigger: item,
            start: "top bottom",
            end: "bottom top",
            markers: true,
            onEnter: () => {
                timelineBTT1.play();
            },
            onLeave: () => {
                timelineBTT4.play();
            },
        });
    } else if (item.classList.contains("BTT4")) {
        animate(item, timelineBTT4, 0, -200);
    } else if (item.classList.contains("BTT2")) {
        animate(item, gsap.timeline(), 250);
    } else if (item.classList.contains("BTT3")) {
        animate(item, gsap.timeline(), 300);
    }
});
