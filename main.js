=HA(MARADÉK(D4;4)=0;HA(I5=0;ÖSSZEFŰZ(D4/E4;"x";E4);HA(I5=4;ÖSSZEFŰZ(KEREK.LE(D4/E4;0)-2;"x";E4;" + ";"1x";E4+4;" + ";"1x";E4);ÖSSZEFŰZ(KEREK.LE(D4/E4;0)-1;"x";E4;" + ";"1x";I5;" + ";"1x";E4)));"Oldalszámnak 4-el oszthatónak kell lennie!")



=HA(I5=0;KEREK.LE(D4/E4;0)*E4;HA(I5=4;(KEREK.LE(D4/E4;0)-2)*E4;HA(I5=8;(KEREK.LE(D4/E4;0)-1)*E4;HA(I5=12;(KEREK.LE(D4/E4;0)-1)*E4;HA(I5=16;(KEREK.LE(D4/E4;0)-1)*E4;"Szólj Péternek, nincs definiálva!")))))
