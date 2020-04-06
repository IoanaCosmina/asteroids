export const getCurrentDate = (format, date = new Date()) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const monthName = date.toLocaleString('default', { month: 'long' });
    const day = date.getDate();

    return (format === "string") ? `${monthName} ${day}, ${year}` : `${year}-${month}-${day}`;
}