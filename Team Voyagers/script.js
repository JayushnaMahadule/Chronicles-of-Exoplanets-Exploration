var tl = gsap.timeline()
const hi = "I am here"
tl.to("#mars",{
    rotation: 360,
  transformOrigin: "center",
  ease: "none",
  duration: 30,
  repeat: -1
})
