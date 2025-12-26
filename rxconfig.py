import reflex as rx

config = rx.Config(
    app_name="dev_language",
    plugins=[
        rx.plugins.SitemapPlugin(),
        rx.plugins.TailwindV4Plugin(),
    ]
)