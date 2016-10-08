# Setup VM

- Get VMBox
- Get VMBox Extra
- Get Ubuntu latest
- Get a good password. While install check openssh.
- To setup higher resolution:

  - `sudo reboot`
  - Hold `C` while it boot -> get to GRUB shell

    - Run vbeinfo and make a decision (e.g. `1920x1200x32`)
    - `reboot`

  - sudo nano /etc/default/grub
  - Change `GRUB_GFXMODE`= (e.g. `GRUB_GFXMODE=1920x1200x32` )
  - Set `GRUB_GFXPAYLOAD_LINUX` to `GRUB_GFXPAYLOAD_LINUX=keep`.
  - `sudo update-grub`

#
