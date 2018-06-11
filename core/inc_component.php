<?php
class IncComponent {

    private $component_dir = "app/components";
    
    function __construct($component_name, $color="green")
    {
        $this->component_name = $component_name;
        $this->folder_path = $this->component_dir . '/' . $this->component_name;
        $this->cmp_main_path = $this->folder_path . '/' . $this->component_name . '.php';
        $this->cmp_main_js_path = $this->folder_path . '/assets/js/' . $this->component_name . '.js';
        $this->cmp_main_css_path = $this->folder_path . '/assets//css/' . $this->component_name . '.css';

        $cmp_main = file_exists($this->cmp_main_path);
        
        if($cmp_main) {
            if(file_exists($this->cmp_main_js_path)) {
                echo '<script src="/' . $this->cmp_main_js_path . '"></script>';
            }
            if(file_exists($this->cmp_main_css_path)) {
                echo '<link rel="stylesheet" href="/' . $this->cmp_main_css_path . '">';
            }
            
            include $this->cmp_main_path;
        }

    }
    
    private function cmp_exists()
    {
        return is_dir($folder_path);
    }

}