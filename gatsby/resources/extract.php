<?php
  class my_ZipArchive extends ZipArchive
  {
    public function extractSubdirTo($destination)
    {
      $errors = array();

      // Prepare dirs
      $destination = str_replace(array("/", "\\"), DIRECTORY_SEPARATOR, $destination);

      if (substr($destination, mb_strlen(DIRECTORY_SEPARATOR, "UTF-8") * -1) != DIRECTORY_SEPARATOR)
        $destination .= DIRECTORY_SEPARATOR;

      // Extract files
      for ($i = 0; $i < $this->numFiles; $i++)
      {
        $filename = $this->getNameIndex($i);
        $fileinfo = pathinfo($filename);

        echo($filename);
        echo("</br>\n");

        $relativePath = $destination . "/" . $filename;

          if (mb_strlen($relativePath, "UTF-8") > 0)
          {
            if (substr($filename, -1) == "/")  // Directory
            {
              // New dir
              if (!is_dir($destination . $relativePath))
                if (!@mkdir($destination . $relativePath, 0755, true))
                  $errors[$i] = $filename;
            }
            else
            {
              if (dirname($relativePath) != ".")
              {
                if (!is_dir($destination . dirname($relativePath)))
                {
                  // New dir (for file)
                  @mkdir($destination . dirname($relativePath), 0755, true);
                }
              }

              // New file
              if (@file_put_contents($destination . $relativePath, $this->getFromIndex($i)) === false)
                $errors[$i] = $filename;
            }
          }

        }

      return $errors;
    }
  }

$path = 'website.zip';

echo "<pre>";

$zip = new my_ZipArchive();
if ($zip->open("website.zip") === TRUE)
{
  $errors = $zip->extractSubdirTo("./", "./");
  $zip->close();

  echo 'ok, errors: ' . count($errors);
}
else
{
  echo 'failed';
}
?>