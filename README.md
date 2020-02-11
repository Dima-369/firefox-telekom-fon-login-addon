See https://apple.stackexchange.com/a/211604 on how to disable the captive login window in macOS.
Otherwise, the macOS captive login window needs to be dismissed every time manually to make this work.

Firefox also needs to have saved the email and password of the Telekom login.

## [Hammerspoon](https://www.hammerspoon.org/) script

I also use the script below to open the captive login page in Firefox as soon as I see the `You must log in to this network before you can access the Internet.` message.

```lua
-- open captive login tab in Firefox for Telekom_FON
hs.hotkey.bind(hyper, "g", function()
  hs.eventtap.keyStroke({'cmd'}, 't')
  hs.eventtap.keyStrokes('detectportal.firefox.com/success.txt')
  hs.eventtap.keyStroke({}, 'return')
end)
```
