export const formatDate = (dateString: string, type: 'short' | 'long' = 'short') => {
    const date = new Date(dateString);

    if (type === 'short') {
        return new Intl.DateTimeFormat('en-US', {
            month: 'short',
            day: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
        }).format(date);
    } else {
        return new Intl.DateTimeFormat('en-US', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
        }).format(date);
    }
}