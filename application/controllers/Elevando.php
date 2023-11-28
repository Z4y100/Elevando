<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Elevando extends CI_Controller {

	
	public function index()
	{
		$this->load->view('index');
	}

	public function ejercicios() {
        $this->load->view('recursos/ejercicios');
    }

	public function material() {
        $this->load->view('recursos/material');
    }
}
