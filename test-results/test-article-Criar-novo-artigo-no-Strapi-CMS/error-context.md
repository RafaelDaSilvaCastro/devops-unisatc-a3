# Page snapshot

```yaml
- banner:
  - combobox "Select interface language": English
- main:
  - heading "Welcome to Strapi!" [level=1]
  - text: Log in to your Strapi account Email
  - textbox "Email": admin@satc.edu.br
  - text: Password
  - textbox "Password": welcomeToStrapi123
  - button "Show password"
  - checkbox "Remember me"
  - text: Remember me
  - button "Login"
  - link "Forgot your password?":
    - /url: /admin/auth/forgot-password
- log
- status
- alert
```