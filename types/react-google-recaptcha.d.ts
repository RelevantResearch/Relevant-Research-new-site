declare module 'react-google-recaptcha' {
    import * as React from 'react'

    interface ReCAPTCHAProps {
        sitekey: string
        onChange?: (token: string | null) => void
        onErrored?: () => void
        onExpired?: () => void
        theme?: 'light' | 'dark'
        type?: 'image' | 'audio'
        tabindex?: number
        size?: 'invisible' | 'compact' | 'normal'
        badge?: 'bottomright' | 'bottomleft' | 'inline'
        className?: string
        style?: React.CSSProperties
        ref?: React.Ref<any>
    }

    export default class ReCAPTCHA extends React.Component<ReCAPTCHAProps> {
        execute(): void
        executeAsync(): Promise<string>
        reset(): void
    }
}
