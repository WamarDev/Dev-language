import reflex as rx

# 1. DATOS INICIALES
INITIAL_DATA = [
    {
        "name": "Python",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        "properties": "Interpretado, dinámico, multiparadigma.",
        "usage": "IA, Data Science, Backend, Scripting."
    },
    {
        "name": "JavaScript",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        "properties": "Web, eventos, asíncrono.",
        "usage": "Frontend, Backend (Node), Apps híbridas."
    },
    {
        "name": "Java",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        "properties": "Compilado a Bytecode, POO robusta.",
        "usage": "Backend corporativo, Android, Big Data."
    }
]

# 2. ESTADO (STATE)
class State(rx.State):
    languages: list[dict] = INITIAL_DATA
    selected_language: dict = {}

    # Variables para formulario
    is_add_modal_open: bool = False
    new_name: str = ""
    new_image: str = ""
    new_properties: str = ""
    new_usage: str = ""

    # --- SELECCIÓN ---
    def select_language(self, language: dict):
        self.selected_language = language

    def clear_selection(self):
        self.selected_language = {}

    @rx.var
    def has_selection(self) -> bool:
        return bool(self.selected_language)

    # --- AÑADIR ---
    def open_add_modal(self):
        self.is_add_modal_open = True

    def close_add_modal(self):
        self.is_add_modal_open = False

    def save_new_language(self):
        img_url = self.new_image if self.new_image else "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
        new_lang = {
            "name": self.new_name,
            "image": img_url,
            "properties": self.new_properties,
            "usage": self.new_usage
        }
        self.languages.append(new_lang)
        self.close_add_modal()
        # Limpiar formulario
        self.new_name = ""
        self.new_image = ""
        self.new_properties = ""
        self.new_usage = ""

    # --- ELIMINAR (NUEVO) ---
    def delete_language(self, language: dict):
        """Elimina el lenguaje de la lista."""
        self.languages.remove(language)
        # Si el lenguaje borrado estaba abierto en detalles, cerramos el modal
        if self.selected_language == language:
            self.selected_language = {}


# 3. COMPONENTES DE UI

def language_card(language: dict):
    """
    Tarjeta con botón de eliminar.
    Usamos un rx.box con position="relative" para poder colocar
    la 'X' en la esquina (position="absolute").
    """
    return rx.box(
        # Botón de eliminar (X roja)
        rx.button(
            "X",
            on_click=lambda: State.delete_language(language),
            color_scheme="red",
            size="1",  # Botón pequeño
            position="absolute",
            top="5px",
            right="5px",
            z_index="10", # Asegura que esté por encima
            variant="solid",
            cursor="pointer",
            border_radius="full",
            padding="0.2em"
        ),
        
        # Contenido de la tarjeta (Click para ver detalles)
        rx.vstack(
            rx.image(
                src=language["image"],
                width="80px",
                height="80px",
                object_fit="contain",
            ),
            rx.text(language["name"], font_weight="bold"),
            
            # Evento click SOLO en el contenido, no en la caja entera
            # para evitar conflictos con el botón de borrar
            on_click=lambda: State.select_language(language),
            
            padding="1.5em", # Un poco más de padding para que quepa la X
            align_items="center",
            width="100%",
            height="100%"
        ),
        
        # Estilos del contenedor general
        bg="rgba(255, 255, 255, 0.05)",
        border_radius="lg",
        position="relative", # Necesario para que el botón absolute funcione
        _hover={"bg": "rgba(255, 255, 255, 0.1)", "transform": "scale(1.05)"},
        transition="all 0.2s",
        cursor="pointer"
    )

def details_modal():
    """Modal de Detalles"""
    return rx.cond(
        State.has_selection,
        rx.vstack(
            rx.heading(State.selected_language["name"], size="8"),
            rx.image(
                src=State.selected_language["image"], 
                width="100px", 
                height="100px"
            ),
            rx.divider(margin_y="1em"),
            
            rx.vstack(
                rx.box(
                    rx.text("Propiedades:", font_weight="bold", color="lightblue"),
                    rx.text(State.selected_language["properties"]),
                    margin_bottom="0.5em"
                ),
                rx.box(
                    rx.text("Para qué sirve:", font_weight="bold", color="lightblue"),
                    rx.text(State.selected_language["usage"]),
                ),
                align_items="start",
                width="100%"
            ),

            rx.button(
                "Cerrar", 
                on_click=State.clear_selection, 
                color_scheme="red",
                margin_top="1.5em"
            ),
            bg="rgba(30, 30, 30, 0.95)",
            padding="2em",
            border_radius="xl",
            border="1px solid #666",
            position="fixed",
            top="50%",
            left="50%",
            transform="translate(-50%, -50%)",
            z_index="1000",
            box_shadow="0px 10px 30px rgba(0,0,0,0.8)",
            max_width="400px",
            width="90%",
            align_items="center",
            text_align="center"
        )
    )

def add_language_modal():
    """Modal de Añadir"""
    return rx.cond(
        State.is_add_modal_open,
        rx.vstack(
            rx.heading("Añadir Lenguaje", size="6"),
            
            rx.vstack(
                rx.text("Nombre:"),
                rx.input(placeholder="Ej: Rust", on_change=State.set_new_name, width="100%"),
                rx.text("URL Imagen:"),
                rx.input(placeholder="http://...", on_change=State.set_new_image, width="100%"),
                rx.text("Propiedades:"),
                rx.text_area(placeholder="Descripción...", on_change=State.set_new_properties, width="100%"),
                rx.text("Usos:"),
                rx.text_area(placeholder="Usos...", on_change=State.set_new_usage, width="100%"),
                spacing="3",
                width="100%",
                align_items="start"
            ),

            rx.hstack(
                rx.button("Cancelar", on_click=State.close_add_modal, color_scheme="gray"),
                rx.button("Guardar", on_click=State.save_new_language, color_scheme="green"),
                spacing="4",
                margin_top="1.5em"
            ),
            bg="#222",
            padding="2em",
            border_radius="xl",
            border="1px solid #555",
            position="fixed",
            top="50%",
            left="50%",
            transform="translate(-50%, -50%)",
            z_index="1000",
            max_width="500px",
            width="90%",
            align_items="center"
        )
    )

# 4. PÁGINA PRINCIPAL
def index():
    return rx.box(
        rx.vstack(
            rx.heading("Diccionario de Lenguajes", size="9"),
            rx.text("Haz clic para ver detalles, añade uno nuevo o elimínalo con la X", color="gray.400"),
            
            rx.button(
                "+ Añadir Lenguaje", 
                on_click=State.open_add_modal,
                color_scheme="blue",
                size="3",
                margin_y="1em"
            ),
            
            rx.grid(
                rx.foreach(State.languages, language_card),
                columns="3",
                spacing="4",
                width="100%",
                max_width="800px"
            ),
            
            details_modal(),
            add_language_modal(),
            
            padding="2em",
            align_items="center",
            min_height="100vh",
            bg="#111", 
            color="white"
        )
    )

app = rx.App()
app.add_page(index)