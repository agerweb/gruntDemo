
 // require("load-grunt-tasks")(grunt)
module.exports = function(grunt) {

require("load-grunt-tasks")(grunt)


  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    processhtml: {
       options: {
          data:{
            random:Math.random()
          }
       },
       dist: {
        files: {
        'dist/index.html': ['index.html']
        }
       }
    },
    "babel": {
    options: {
      sourceMap: false
    },
    dist: {
      files: {
        "dist/js/main.js": "js/main.js"
      }
    }
  },
    concat: {
         options: {
             separator: ';;\n',
             stripBanners: true
         },
         basic_and_extras: {
          files: {
            'dist/js/app.js':[
                'js/f1.js', 'js/f2.js',"dist/js/main.js"
            ]
         }
       }
     },
    
    uglify: {

      my_target: {
        files: {
          'dist/js/app.min.js': 'dist/js/app.js'
        }
      }
    },

    less:{
      my_target:{
        options: {},
        files: {
          'dist/css/main.css': 'css/main.less'
        }
      }
    },

    cssmin: {
         options: {
             keepSpecialComments: 0
         },
         compress: {
             files: {
                 'dist/css/app.min.css': [
                    // "css/swiper-3.4.2.min.css",
                     "dist/css/app.css"
                 ]
                
             }
         }
     },

    copy: {
      my_target: {
        expand: true,
        src: 'images/**',
        dest: 'dist/',
      },
    },

    
    

  });

  // 加载包含 "uglify" 任务的插件。
  // grunt.loadNpmTasks('grunt-processhtml');
  // grunt.loadNpmTasks('grunt-babel');
  // grunt.loadNpmTasks('grunt-contrib-concat');
  // grunt.loadNpmTasks('grunt-contrib-uglify');
  // grunt.loadNpmTasks('grunt-contrib-cssmin');
  // grunt.loadNpmTasks('grunt-contrib-less');
  // grunt.loadNpmTasks('grunt-contrib-copy');

  

  //注册任务
  grunt.registerTask('default', ['processhtml',"babel",'concat','uglify','less', 'cssmin', 'copy']);

};