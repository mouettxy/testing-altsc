export const useHeading = () => {
  const route = useRoute()

  const heading = computed(() =>
    route.meta.heading ? (route.meta.heading as string) : ''
  )

  return heading
}
