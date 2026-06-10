export async function trackEvent(_event: string, _details?: string) {
  // Analytics tracking - configure your own backend here
  // By default this is a no-op for the template
}

export function useTracker() {
  return { trackEvent };
}
