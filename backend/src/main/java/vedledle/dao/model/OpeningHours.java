package vedledle.dao.model;

import lombok.Getter;

import java.util.Calendar;

/**
 * Enum representing the opening hours for each day of the week.
 */

@Getter
public enum OpeningHours {
    MONDAY(Calendar.MONDAY, -1, -1, -1, -1),
    TUESDAY(Calendar.TUESDAY, 9, 30, 17, 0),
    WEDNESDAY(Calendar.WEDNESDAY, 9, 30, 17, 0),
    THURSDAY(Calendar.THURSDAY, 9, 30, 17, 0),
    FRIDAY(Calendar.FRIDAY, 9, 30, 17, 0),
    SATURDAY(Calendar.SATURDAY, 9, 0, 14, 0),
    SUNDAY(Calendar.SUNDAY, -1, -1, -1, -1);

    private final int dayOfWeek;
    private final int openHour;
    private final int openMinute;
    private final int closeHour;
    private final int closeMinute;

    /**
     * Constructor for the OpeningHours enum.
     *
     * @param dayOfWeek   the day of the week (see {@link Calendar})
     * @param openHour    the opening hour (24-hour format)
     * @param openMinute  the opening minute
     * @param closeHour   the closing hour (24-hour format)
     * @param closeMinute the closing minute
     */
    OpeningHours(int dayOfWeek, int openHour, int openMinute, int closeHour, int closeMinute) {
        this.dayOfWeek = dayOfWeek;
        this.openHour = openHour;
        this.openMinute = openMinute;
        this.closeHour = closeHour;
        this.closeMinute = closeMinute;
    }

    @Override
    public String toString() {
        return dayOfWeek + "," + openHour + "," + openMinute + "," + closeHour + "," + closeMinute;
    }
}
