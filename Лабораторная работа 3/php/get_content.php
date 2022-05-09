<?php
	$url = '../xml/cars.xml';
	$file = file_get_contents($url);
	$xml = simplexml_load_string($file);
	$content = array();
	$i=0;
		while ($i < 5) {
				$content[$i] = $xml->cars[$i+1-1];
				$i++;
		}
	echo json_encode($content);
?>