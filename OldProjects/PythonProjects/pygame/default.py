import pygame

pygame.init()

# establecer el tamaño de la ventana
size = [700, 500]
screen = pygame.display.set_mode(size)

# establecer el título de la ventana
pygame.display.set_caption("Among Us")

# establecer el color de fondo de la ventana
bg_color = (255, 255, 255)

# bucle principal del juego
while True:
    # manejar eventos
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            # salir del juego si el usuario hace clic en el botón X
            pygame.quit()
            

    # dibujar el fondo
    screen.fill(bg_color)

    # actualizar la ventana
    pygame.display.flip()