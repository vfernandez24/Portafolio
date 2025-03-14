const handleScroll = (targetRef: React.RefObject<HTMLDivElement | null>) => {
  if (targetRef.current) {
    targetRef.current.scrollIntoView({ behavior: 'smooth' })
  }
}

export default handleScroll