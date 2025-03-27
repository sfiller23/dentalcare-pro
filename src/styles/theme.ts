export const theme = {
  colors: {
    primary: "#306CFE", // כחול עיקרי (כפתור "Create Appointment")
    secondary: "#F5F7FA", // רקע בהיר כללי
    accent: "#D0E0FD", // רקע עדין לתוויות/כפתורים (selected)
    textPrimary: "#1C1E21", // טקסט עיקרי
    textSecondary: "#5F6C72", // טקסט משני
    background: "#FFFFFF", // רקע כרטיסים ותוכן
    border: "#E5EAF2", // גבולות בין כרטיסים או שורות
    success: "#22C55E", // ירוק להצלחה (✓ Done)
    warning: "#FACC15", // צהוב לאזהרה (Pending)
    danger: "#EF4444", // אדום לשגיאות (לא מופיע כאן, אבל כדאי שיהיה)
    sidebarBg: "#F9FAFB", // רקע הסיידבר
    icon: "#A0AEC0",
  },
  spacing: (factor: number) => `${factor * 4}px`,
  borderRadius: {
    sm: "4px",
    md: "8px",
    lg: "16px",
  },
  fontSizes: {
    small: "0.875rem",
    medium: "1rem",
    large: "1.25rem",
    xlarge: "1.5rem",
  },
  buttonSizes: {
    small: "3rem",
    medium: "5rem",
    large: "7rem",
  },
  loaderSizes: {
    small: "2rem",
    medium: "5rem",
    large: "8rem",
  },
};
