package main

import (
	"html/template"
	"io"

	"github.com/HeyImCub/SeniorProject/routes"
	"github.com/labstack/echo/v4"
)

type Template struct {
	templates *template.Template
}

func (t *Template) Render(w io.Writer, name string, data interface{}, c echo.Context) error {

	// Add global methods if data is a map
	if viewContext, isMap := data.(map[string]interface{}); isMap {
		viewContext["reverse"] = c.Echo().Reverse
	}

	return t.templates.ExecuteTemplate(w, name, data)
}

func main() {
	e := echo.New()
	t := &Template{
		templates: template.Must(template.ParseGlob("public/html/*.html")),
	}
	e.Renderer = t
	e.Static("/public", "public")
	e.GET("/", routes.Index).Name = "Index"
	e.Logger.Fatal(e.Start(":80"))
}
