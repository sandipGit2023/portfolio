export const useScrollNavigation = () => {
  const router = useRouter()
  let lastScrollY = 0
  let isNavigating = false
  let scrollThreshold = 100
  let navigationDelay = 500

  // Define the page order for infinite scrolling
  const pageOrder = ["/", "/work", "/about", "/contact"]

  const getCurrentPageIndex = () => {
    const currentRoute = router.currentRoute.value.path
    return pageOrder.indexOf(currentRoute)
  }

  const getNextPage = () => {
    const currentIndex = getCurrentPageIndex()
    const nextIndex = (currentIndex + 1) % pageOrder.length
    return pageOrder[nextIndex]
  }

  const getPreviousPage = () => {
    const currentIndex = getCurrentPageIndex()
    const previousIndex = currentIndex === 0 ? pageOrder.length - 1 : currentIndex - 1
    return pageOrder[previousIndex]
  }

  const handleScrollNavigation = (options) => {
    const { direction, threshold = scrollThreshold, delay = navigationDelay } = options

    const handleScroll = () => {
      if (isNavigating) return

      const currentScrollY = window.scrollY

      let shouldNavigate = false

      if (direction === "down") {
        shouldNavigate = currentScrollY > lastScrollY && currentScrollY > threshold
      } else {
        shouldNavigate = currentScrollY < lastScrollY && currentScrollY < threshold
      }

      if (shouldNavigate) {
        isNavigating = true

        // Add fade out effect
        const mainElement = document.querySelector(".w-full.h-full.min-h-screen")
        if (mainElement) {
          mainElement.style.transition = "opacity 0.5s ease-out"
          mainElement.style.opacity = "0"
        }

        // Navigate to next/previous page
        setTimeout(() => {
          const targetRoute = direction === "down" ? getNextPage() : getPreviousPage()
          router.push(targetRoute)
        }, delay)
      }

      lastScrollY = currentScrollY
    }

    const handleWheel = (event) => {
      if (isNavigating) return

      let shouldNavigate = false

      if (direction === "down") {
        shouldNavigate = event.deltaY > 0
      } else {
        shouldNavigate = event.deltaY < 0 && window.scrollY < threshold
      }

      if (shouldNavigate) {
        isNavigating = true

        // Add fade out effect
        const mainElement = document.querySelector(".w-full.h-full.min-h-screen")
        if (mainElement) {
          mainElement.style.transition = "opacity 0.5s ease-out"
          mainElement.style.opacity = "0"
        }

        // Navigate to next/previous page
        setTimeout(() => {
          const targetRoute = direction === "down" ? getNextPage() : getPreviousPage()
          router.push(targetRoute)
        }, delay)
      }
    }

    const setupListeners = () => {
      window.addEventListener("scroll", handleScroll, { passive: true })
      window.addEventListener("wheel", handleWheel, { passive: true })
    }

    const cleanupListeners = () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("wheel", handleWheel)
    }

    return {
      setupListeners,
      cleanupListeners
    }
  }

  // Function to navigate to a specific direction
  const navigateToDirection = (direction) => {
    if (isNavigating) return

    isNavigating = true

    // Add fade out effect
    const mainElement = document.querySelector(".w-full.h-full.min-h-screen")
    if (mainElement) {
      mainElement.style.transition = "opacity 0.5s ease-out"
      mainElement.style.opacity = "0"
    }

    // Navigate to next/previous page
    setTimeout(() => {
      const targetRoute = direction === "down" ? getNextPage() : getPreviousPage()
      router.push(targetRoute)
    }, navigationDelay)
  }

  return {
    handleScrollNavigation,
    navigateToDirection,
    getCurrentPageIndex,
    getNextPage,
    getPreviousPage,
    pageOrder
  }
}
