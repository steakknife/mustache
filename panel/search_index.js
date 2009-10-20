var search_data = {"index":{"longSearchIndex":["lib/mustache.rb","mustache","mustache","mustache::sinatra","mustache","mustache","mustache::context","mustache","mustache","mustache::template","mustache::template","mustache::template","mustache::template","mustache","mustache","mustache","mustache::template","mustache::template","mustache::template","mustache::template","mustache::sinatra::helpers","mustache::context","mustache::template","mustache::template","mustache::template","mustache","mustache","mustache::sinatra","mustache","mustache","mustache::template","mustache::sinatra::helpers","mustache::template","mustache","mustache","mustache","mustache","mustache","mustache","mustache","mustache","mustache","mustache","mustache","mustache","mustache::template","mustache","mustache","mustache","mustache","mustache","mustache::template","files/contributors.html","files/history_md.html","files/license.html","files/readme_md.html","files/readme_md.html","files/lib/mustache_rb.html","files/lib/mustache/context_rb.html","files/lib/mustache/sinatra_rb.html","files/lib/mustache/template_rb.html","files/lib/mustache/version_rb.html"],"info":[["Mustache","lib/mustache.rb","classes/Mustache.html"," < Object","Mustache is the base class from which your Mustache subclasses should inherit (though it can be used",1],["Context","Mustache","classes/Mustache/Context.html"," < Hash","A Context represents the context which a Mustache template is executed within. All Mustache tags reference",1],["Sinatra","Mustache","classes/Mustache/Sinatra.html"," < ","Support for Mustache in your Sinatra app. require 'mustache/sinatra' class Hurl < Sinatra::Base register",1],["Helpers","Mustache::Sinatra","classes/Mustache/Sinatra/Helpers.html"," < ","",1],["Template","Mustache","classes/Mustache/Template.html"," < Object","A Template is a compiled version of a Mustache template. The idea is this: when handed a Mustache template,",1],["[]","Mustache","classes/Mustache.html#M000042","(key)","Context accessors. view = Mustache.new view[:name] = \"Jon\" view.template = \"Hi, {{name}}!\" view.render",2],["[]","Mustache::Context","classes/Mustache/Context.html#M000001","(name)","",2],["[]=","Mustache","classes/Mustache.html#M000043","(key, value)","",2],["classify","Mustache","classes/Mustache.html#M000035","(underscored)","template_partial => TemplatePartial ",2],["compile","Mustache::Template","classes/Mustache/Template.html#M000007","(src = @source)","Does the dirty work of transforming a Mustache template into an interpolation-friendly Ruby string. ",2],["compile_partial","Mustache::Template","classes/Mustache/Template.html#M000010","(name)","Partials are basically a way to render views from inside other views. ",2],["compile_sections","Mustache::Template","classes/Mustache/Template.html#M000008","(src)","{{#sections}}okay{{/sections}} Sections can return true, false, or an enumerable. If true, the section",2],["compile_tags","Mustache::Template","classes/Mustache/Template.html#M000009","(src)","Find and replace all non-section tags. In particular we look for four types of tags: 1. Escaped variable",2],["compiled?","Mustache","classes/Mustache.html#M000034","()","Has this instance or its class already compiled a template? ",2],["compiled?","Mustache","classes/Mustache.html#M000033","()","Has this template already been compiled? Compilation is somewhat expensive so it may be useful to check",2],["context","Mustache","classes/Mustache.html#M000041","()","A helper method which gives access to the context at a given time. Kind of a hack for now, but useful",2],["ctag","Mustache::Template","classes/Mustache/Template.html#M000015","()","}} - closing tag delimiter ",2],["ctag=","Mustache::Template","classes/Mustache/Template.html#M000016","(tag)","",2],["etag","Mustache::Template","classes/Mustache/Template.html#M000017","(s)","{{}} - an escaped tag ",2],["ev","Mustache::Template","classes/Mustache/Template.html#M000019","(s)","An interpolation-friendly version of a string, for use within a Ruby string. ",2],["mustache","Mustache::Sinatra::Helpers","classes/Mustache/Sinatra/Helpers.html#M000002","(template, options={}, locals={})","Call this in your Sinatra routes. ",2],["new","Mustache::Context","classes/Mustache/Context.html#M000000","(mustache)","",2],["new","Mustache::Template","classes/Mustache/Template.html#M000005","(source, template_path = '.', template_extension = 'html')","Expects a Mustache template as a string along with a template path, which it uses to find partials. ",2],["otag","Mustache::Template","classes/Mustache/Template.html#M000013","()","{{ - opening tag delimiter ",2],["otag=","Mustache::Template","classes/Mustache/Template.html#M000014","(tag)","",2],["path","Mustache","classes/Mustache.html#M000025","()","Alias for `template_path` ",2],["path=","Mustache","classes/Mustache.html#M000026","(path)","Alias for `template_path` ",2],["registered","Mustache::Sinatra","classes/Mustache/Sinatra.html#M000004","(app)","",2],["render","Mustache","classes/Mustache.html#M000044","(data = template, ctx = {})","Parses our fancy pants template file and returns normal file with all special {{tags}} and {{#sections}}replaced{{/sections}}.",2],["render","Mustache","classes/Mustache.html#M000020","(*args)","Helper method for quickly instantiating and rendering a view. ",2],["render","Mustache::Template","classes/Mustache/Template.html#M000006","(context)","Renders the `@source` Mustache template using the given `context`, which should be a simple hash keyed",2],["render_mustache","Mustache::Sinatra::Helpers","classes/Mustache/Sinatra/Helpers.html#M000003","(template, data, opts, locals, &block)","This is called by Sinatra's `render` with the proper paths and, potentially, a block containing a sub-view",2],["str","Mustache::Template","classes/Mustache/Template.html#M000012","(s)","Get a (hopefully) literal version of an object, sans quotes ",2],["template","Mustache","classes/Mustache.html#M000039","()","The template can be set at the instance level. ",2],["template","Mustache","classes/Mustache.html#M000031","()","The template is the actual string Mustache uses as its template. There is a bit of magic here: what we",2],["template=","Mustache","classes/Mustache.html#M000032","(template)","",2],["template=","Mustache","classes/Mustache.html#M000040","(template)","",2],["template_extension","Mustache","classes/Mustache.html#M000027","()","A Mustache template's default extension is 'html' ",2],["template_extension=","Mustache","classes/Mustache.html#M000028","(template_extension)","",2],["template_file","Mustache","classes/Mustache.html#M000029","()","The template file is the absolute path of the file Mustache will use as its template. By default it's",2],["template_file=","Mustache","classes/Mustache.html#M000030","(template_file)","",2],["template_path","Mustache","classes/Mustache.html#M000023","()","The template path informs your Mustache subclass where to look for its corresponding template. By default",2],["template_path=","Mustache","classes/Mustache.html#M000024","(path)","",2],["templateify","Mustache","classes/Mustache.html#M000037","(obj)","Turns a string into a Mustache::Template. If passed a Template, returns it. ",2],["templateify","Mustache","classes/Mustache.html#M000038","(obj)","",2],["tmpid","Mustache::Template","classes/Mustache/Template.html#M000011","()","Generate a temporary id, used when compiling code. ",2],["to_html","Mustache","classes/Mustache.html#M000021","(*args)","Alias for `render` ",2],["to_html","Mustache","classes/Mustache.html#M000045","(data = template, ctx = {})","Alias for #render",2],["to_text","Mustache","classes/Mustache.html#M000022","(*args)","Alias for `render` ",2],["to_text","Mustache","classes/Mustache.html#M000046","(data = template, ctx = {})","Alias for #render",2],["underscore","Mustache","classes/Mustache.html#M000036","(classified = name)","TemplatePartial => template_partial Takes a string but defaults to using the current class' name. ",2],["utag","Mustache::Template","classes/Mustache/Template.html#M000018","(s)","{{{}}} - an unescaped tag ",2],["CONTRIBUTORS","files/CONTRIBUTORS.html","files/CONTRIBUTORS.html","","* Chris Wanstrath * Francesc Esplugas * Magnus Holm * Nicolas Sanguinetti * Jan-Erik Rediger ",3],["HISTORY.md","files/HISTORY_md.html","files/HISTORY_md.html","","## 0.3.2 (2009-10-19)  * Bugfix: Partials in Sinatra were using the wrong path.  ## 0.3.1 (2009-10-19)",3],["LICENSE","files/LICENSE.html","files/LICENSE.html","","Copyright (c) 2009 Chris Wanstrath  Permission is hereby granted, free of charge, to any person obtaining",3],["README.md","files/README_md.html","files/README_md.html","","Mustache =========  Inspired by [ctemplate][1] and [et][2], Mustache is a framework-agnostic way to render",3],["README.md","files/README_md.html","files/README_md.html","","Mustache =========  Inspired by [ctemplate][1] and [et][2], Mustache is a framework-agnostic way to render",3],["mustache.rb","files/lib/mustache_rb.html","files/lib/mustache_rb.html","","",3],["context.rb","files/lib/mustache/context_rb.html","files/lib/mustache/context_rb.html","","",3],["sinatra.rb","files/lib/mustache/sinatra_rb.html","files/lib/mustache/sinatra_rb.html","","",3],["template.rb","files/lib/mustache/template_rb.html","files/lib/mustache/template_rb.html","","",3],["version.rb","files/lib/mustache/version_rb.html","files/lib/mustache/version_rb.html","","",3]],"searchIndex":["mustache","context","sinatra","helpers","template","[]()","[]()","[]=()","classify()","compile()","compile_partial()","compile_sections()","compile_tags()","compiled?()","compiled?()","context()","ctag()","ctag=()","etag()","ev()","mustache()","new()","new()","otag()","otag=()","path()","path=()","registered()","render()","render()","render()","render_mustache()","str()","template()","template()","template=()","template=()","template_extension()","template_extension=()","template_file()","template_file=()","template_path()","template_path=()","templateify()","templateify()","tmpid()","to_html()","to_html()","to_text()","to_text()","underscore()","utag()","contributors","history.md","license","readme.md","readme.md","mustache.rb","context.rb","sinatra.rb","template.rb","version.rb"]}}