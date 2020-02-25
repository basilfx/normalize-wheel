declare module 'normalize-wheel' {
    interface NormalizedWheelEvent {
        spinX: number,
        spinY: number,
        pixelX: number,
        pixelY: number
    }
    function normalizeWheel(e: WheelEvent): NormalizedWheelEvent;
    export = normalizeWheel;
}
