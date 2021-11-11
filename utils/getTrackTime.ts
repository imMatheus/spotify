export function getTrackTime(seconds: number) {
    const secs = seconds % 60 < 10 ? '0' + (seconds % 60) : seconds % 60
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds - hours * 3600) / 60)

    if (hours === 0 && minutes === 0) return '0:' + secs
    if (hours === 0) return minutes + ':' + secs
    return hours + ':' + (minutes < 10 ? '0' + minutes : minutes) + ':' + secs
}
