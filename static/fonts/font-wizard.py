from fontTools import subset


INPUT_FONT = "input.ttf"
OUTPUT_FONT = "output.woff2"

UNICODE_RANGES = [
    # Латиница
    (0x0041, 0x005A),  # A-Z
    (0x0061, 0x007A),  # a-z

    # Кириллица
    (0x0410, 0x042F),  # А-Я
    (0x0430, 0x044F),  # а-я
    (0x0401, 0x0401),  # Ё
    (0x0451, 0x0451),  # ё

    # Цифры
    (0x0030, 0x0039),  # 0-9

    # Базовая пунктуация и спецсимволы ASCII
    (0x0020, 0x002F),
    (0x003A, 0x0040),
    (0x005B, 0x0060),
    (0x007B, 0x007E),

    # Базовые математические операторы
    (0x22C5, 0x22C5),  # ⋅
    (0x002B, 0x002B),  # +
    (0x002D, 0x002D),  # -
    (0x003D, 0x003D),  # =
    (0x003C, 0x003C),  # <
    (0x003E, 0x003E),  # >
    (0x00B7, 0x00B7),  # ·
    (0x00D7, 0x00D7),  # ×
    (0x00F7, 0x00F7),  # ÷

    # Валюты
    (0x0024, 0x0024),  # $
    (0x20AC, 0x20AC),  # €
    (0x00A3, 0x00A3),  # £
    (0x00A5, 0x00A5),  # ¥
    (0x20BD, 0x20BD),  # ₽

    # Типографика
    (0x00A0, 0x00A0),  # nbsp
    (0x2013, 0x2014),  # – —
    (0x2018, 0x201F),  # ‘ ’ “ ”
    (0x2026, 0x2026),  # …
]


def build_unicode_list(ranges):
    result = []

    for start, end in ranges:
        result.extend(range(start, end + 1))

    return result

unicodes = build_unicode_list(UNICODE_RANGES)

options = subset.Options()
options.flavor = "woff2"

font = subset.load_font(INPUT_FONT, options)

subsetter = subset.Subsetter()
subsetter.populate(unicodes=unicodes)

subsetter.subset(font)

subset.save_font(font, OUTPUT_FONT, options)

print(f"Saved: {OUTPUT_FONT}")
